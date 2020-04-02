import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FirebaseService } from '../../services/firebase.service';
import { ModalController } from '@ionic/angular';
import { QrCodedPage } from '../qr-coded/qr-coded.page';
import { Vibration } from '@ionic-native/vibration/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [Vibration]
})
export class HomePage {

  constructor(private router: Router, public alertController: AlertController, private fireStore: FirebaseService, public modalController: ModalController, private vibration: Vibration) { }

  public allUsers
  public switchState
  modal: any;
  loading: any

  ngOnInit() {
    this.fireStore.getUsers().valueChanges().subscribe((data) => {
      this.allUsers = data
    })
    this.fireStore.getSwitchState().valueChanges().subscribe((data: any) => {
      this.switchState = data[0].is_launched
    });
  }

  goToUserEdit(user) {
    if (user.accept_modify_account === false) {
      this.presentModal(user)
      this.fireStore.getUserById(user.id).valueChanges().subscribe((data) => {
        if (data["accept_modify_account"] == true) {
          this.vibration.vibrate(1000);
          this.modal.dismiss()
          user.request_security_check = false
          user.accept_modify_account = false
          this.fireStore.updateUser(user).then(() => {
            this.router.navigate(['/user', user.id || user]);
          })
        }
      })
    }
    else
      this.router.navigate(['/user', user.id || user]);
  }

  async presentModal(user) {
    user.request_security_check = true
    this.fireStore.updateUser(user)

    this.modal = await this.modalController.create({
      component: QrCodedPage
    });

    this.modal.onDidDismiss().then(() => {
      user.request_security_check = false
      this.fireStore.updateUser(user)
    })
    return await this.modal.present();
  }

  async deleteUser(user) {
    const alert = await this.alertController.create({
      header: 'Delete ' + user.name,
      message: 'Are you sure you want to <strong>delete ' + user.name + " ?</strong>",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        }, {
          text: 'Delete',
          handler: () => {
            this.confirmDeleteUser(user);
          }
        }
      ]
    });

    await alert.present();
  }

  confirmDeleteUser(user) {
    if (user.accept_modify_account === false) {
      user.request_security_check = true
      this.fireStore.updateUser(user)
      this.presentModal(user)
      this.fireStore.getUserById(user.id).valueChanges().subscribe((data: any) => {
        if (data["accept_modify_account"] == true) {
          this.vibration.vibrate(1000);
          this.modal.dismiss()
          this.fireStore.deleteAllImagesFromUser(data.photos);
          this.fireStore.deleteUser(data)
        }
      })
    }
    else {
      this.fireStore.deleteUser(user);
      this.fireStore.deleteAllImagesFromUser(user.photos);
    }
  }

  switchProgramState() {
    this.fireStore.switchProgramStatus(!this.switchState)
  }
}
