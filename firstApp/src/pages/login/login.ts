import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoadingController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  constructor(
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private storage: Storage
  ) {}
  signIn(form: NgForm) {
    const loading = this.loadingCtrl.create({
      content: 'Signing you up..'
    });
    loading.present();
    this.authService
      .signin(form.value.email, form.value.password)
      .then(data => {
        loading.dismiss();
        const al = this.alertCtrl.create({
          title: 'Sign In Successful',
          buttons: ['ok']
        });
        al.present();
        let uid = this.authService.getActiveUser().uid;
        this.storage.set('uid', uid);
        let email = this.authService.getActiveUser().email;
        this.storage.set('email', email);
      })
      .catch(error => {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Sign In failed',
          message: error.message,
          buttons: ['ok']
        });
        alert.present();
      });
  }
}
