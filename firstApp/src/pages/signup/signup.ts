import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoadingController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  constructor(
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private alerCtrl: AlertController,
    private storage: Storage
  ) {}

  signUp(form: NgForm) {
    const loading = this.loadingCtrl.create({
      content: 'Signing you up..'
    });
    loading.present();
    this.authService
      .signup(form.value.email, form.value.password)
      .then(data => {
        loading.dismiss();
        const al = this.alerCtrl.create({
          title: 'Sign Up Successful',
          buttons: ['ok']
        });
        al.present();
        let uid = this.authService.getActiveUser().uid;
        console.log(uid);
        this.storage.set('uid', uid);
        let email = this.authService.getActiveUser().email;
        this.storage.set('email', email);
      })
      .catch(error => {
        loading.dismiss();
        const alert = this.alerCtrl.create({
          title: 'Sign up failed',
          message: error.message,
          buttons: ['ok']
        });
        alert.present();
      });
  }
}
