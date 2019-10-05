import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ValueTransformer } from '@angular/compiler/src/util';

@Component({
  selector: 'page-login',
  templateUrl: 'profix.html'
})
export class ProfixPage {
  constructor(public navCtrl: NavController, public http: HttpClient) {}
  signUp(form: NgForm) {
    this.http
      .put('https://hackindore-7768e.firebaseio.com/.json', {
        user: form.value.email
      })
      .subscribe();
  }
}
