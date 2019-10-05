import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  movies: any;

  constructor(public navCtrl: NavController, public http: HttpClient) {}

  ionViewDidLoad() {
    this.http
      .get(
        'https://script.google.com/macros/s/AKfycbxsHr0JIAdqaliLAz-cm6YmBdi_Nm9OSuF_Nk7HfAgVVSLfSCw/exec'
      )
      .subscribe(data => {
        this.movies = data;
      });
  }
}
