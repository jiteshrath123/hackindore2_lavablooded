import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {
  name: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ngOnInit() {
    this.name=this.navParams.get('username');
} 

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
  }

}
