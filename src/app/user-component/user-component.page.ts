import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';
import { AlertController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import { User } from "../../models/user.interface";
import 'firebase/storage';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.page.html',
  styleUrls: ['./user-component.page.scss'],
})
export class UserComponentPage implements OnInit {

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private fireStore: FirebaseService, private alert: AlertController) { }
  
  user: any = {
    id: "new-user",
    name: ""
  };
  user_photos: Array<any> = [];
  triedModify = false

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params)
      if (params.id !== "new-user") {
        this.fireStore.getUserById(params.id).valueChanges().subscribe(data => {
          console.log(data)
          this.user = data;
          if (this.user.photos.length > 0)
            this.getUserPhotos()
          else
            this.user_photos.push('./assets/user.png')
        });
      }
    })
  }

  async getUserPhotos() {
    for (let photo of this.user.photos) {
      let storageRef = firebase
        .storage()
        .ref(photo);

      this.user_photos.push(await storageRef.getDownloadURL());
    }
  }

  async addPhotos() {
    const alert = await this.alert.create({
      header: 'Add photos to ' + this.user.name,
      message: 'Look straight at the camera from a 30cm distance.\nVerify that you\'re in a room with good light, then press <strong>Ok</strong>',
      buttons: ['OK']
    });
    await alert.present();
    this.user.request_photos = true
    this.saveUpdates()
  }

  trySaveUpdates() {
    if (this.triedModify)
      this.saveUpdates()
  }

  saveUpdates() {
    if (this.user.id)
      this.fireStore.updateUser(this.user).then((data) => console.log(data))
  }

  createNewUser() {
    if (this.user.name)
      this.fireStore.createUser(this.user.name).then((id) => {
        console.log(id)
        this.user.photos = []
        this.user.id = id
      }
      );
  }

  removePhoto(photo) {
    this.user_photos.splice(this.user_photos.indexOf(photo), 1)
    for (let x of this.user.photos) {
      if (photo.includes(x))
        this.user.photos.splice(x, 1) 
    }
    this.saveUpdates()
  }

  confirmDeleteAllPhotos() {
    this.user.photos = [];
    this.saveUpdates();
  }

  async removeAllPhotos() {
    const alert = await this.alert.create({
      header: 'Delete all your photos',
      message: 'Are you sure you want to <strong>delete all your photos ?</strong>',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        }, {
          text: 'Delete all',
          handler: () => {
            this.confirmDeleteAllPhotos();
          }
        }
      ]
    });
    await alert.present();
  }

}
