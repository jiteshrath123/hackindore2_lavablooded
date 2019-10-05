import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { quote } from '../../data/quotes.interface';
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html'
})
export class QuotePage {
  author: string;
  text: string;
  constructor(private viewCtrl: ViewController, private navParams: NavParams) {}
  ionViewDidLoad() {
    this.author = this.navParams.get('person');
    this.text = this.navParams.get('text');
  }
  onClose(remove = false) {
    this.viewCtrl.dismiss(remove);
  }
}
