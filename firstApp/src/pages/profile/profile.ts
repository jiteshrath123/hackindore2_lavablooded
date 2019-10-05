import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import firebase from 'firebase';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  public myUser = {};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthService,
    private storage: Storage
  ) {
    this.storage.get('uid').then((uid: string) => {
      console.log(uid);
      const personRef: firebase.database.Reference = firebase
        .database()
        .ref('/users/' + uid + '/details/');
      personRef.on('value', personSnapshot => {
        this.myUser = personSnapshot.val();
      });
    });
  }
}
