import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public firestore: AngularFirestore, public afDB: AngularFireDatabase, public afSG: AngularFireStorage) { }

  storage_URL = "coronavirus-user-data.appspot.com/";

  getUsers() {
    return this.firestore.collection('user_data');
  }

  getUserById(id) {
    return this.firestore.collection('user_data').doc(id);
  }

  createUser(
    name: string,
    uid: string,
    id
  ) {
    let accept_modify_account: any
    uid != "" ? accept_modify_account = false : accept_modify_account = true

    return this.firestore.collection('user_data').doc(id).set({
      id,
      name,
      uid,
      accept_modify_account,
      request_photos: false,
      request_security_check: false,
      request_train: false,
      search_history: [],
      photos: [],
      created_at: new Date(),
      updated_at: new Date()
    }).then(data => {
      return id
    });
  }

  deleteUser(user) {
    return this.firestore.doc('user_data/' + user.id).delete();
  }

  updateUser(user) {
    console.log(user.request_security_check)
    return this.firestore.collection('user_data').doc(user.id).update(user);
  }

  switchProgramStatus(newState) {
    return this.firestore.collection("python_function").doc("g9y4AYxRUFBkTnUDvxW2").update({ is_launched: newState })
  }

  getSwitchState() {
    return this.firestore.collection('python_function');
  }

  deleteAllImagesFromUser(all_images) {
    for (let image of all_images) {
      this.deleteImage(image)
    }
  }

  deleteImage(image) {
    return this.afSG.ref(image).delete()
  }
}
