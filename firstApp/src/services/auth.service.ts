import firebase from 'firebase';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private storage: Storage) {}
  signup(email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }
  signin(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }
  logout() {
    firebase.auth().signOut();
    this.storage.set('uid', '');
    this.storage.set('email', '');
    this.storage.remove('uid');
    this.storage.remove('email');
  }
  getActiveUser() {
    return firebase.auth().currentUser;
  }
  resetPassword(email: string) {
    firebase.auth().sendPasswordResetEmail(email);
  }
  sendUserData(
    name: string,
    year: string,
    enroll: string,
    email: string,
    phone: any
  ) {
    let uid = this.getActiveUser().uid;
    this.http
      .put(
        'https://firstapp-48581.firebaseio.com/users/' + uid + '/details/.json',
        {
          Name: name,
          Year_Section: year,
          Enrollment: enroll,
          Email: email,
          Phone_NO: phone,
          Payment_status: 'Not Done'
        }
      )
      .subscribe((resp: Response) => {
        console.log(resp);
      });
  }
}
