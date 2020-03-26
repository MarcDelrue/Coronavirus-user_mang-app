import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore } from 'angularfire2/firestore';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public firestore: AngularFirestore) { }

  storage_URL = "gs://coronavirus-user-data.appspot.com/";

  getUsers() {
    return this.firestore.collection('user_data');
  }

  getUserById(id) {
    return this.firestore.collection('user_data').doc(id);
  }

  createUser(
    name: string,
  ) {
    const id = this.firestore.createId();

  return this.firestore.collection('user_data').doc(id).set({
    id,
    name,
    request_photos: false,
    search_history: [],
    photos: [],
    created_at: new Date(),
    updated_at: new Date()
  }).then(data=>{
    return id
  });
  }

  deleteUser(user) {
    return this.firestore.doc('user_data/' + user.id).delete();
  }

  updateUser(user) {
    return this.firestore.collection('user_data').doc(user.id).update(user);
  }

  switchProgramStatus(newState) {
    return this.firestore.collection("python_function").doc("g9y4AYxRUFBkTnUDvxW2").update({is_launched : newState})
  }

  getSwitchState(){
    return this.firestore.collection('python_function');
  }

  removeAllImagesFromUser(user) {

  }

  removeImage(image) {
    // this.firestore.
    // return this.firestore.storage().ref().child(image).delete()
  }
}
