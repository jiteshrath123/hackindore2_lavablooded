import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, NavPop } from 'ionic-angular';
import { CheckoutPage } from '../checkout/checkout';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  Openchkpg(name:string){
this.navCtrl.push(CheckoutPage,{username:name});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
