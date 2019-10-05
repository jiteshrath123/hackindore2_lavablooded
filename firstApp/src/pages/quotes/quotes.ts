import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';
import { quote } from '../../data/quotes.interface';
import { QuotesService } from '../../services/quotes.service';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})
export class QuotesPage implements OnInit {
  quoteGroup: { category: string; quotes: quote[]; icon: string };
  constructor(
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private quoteService: QuotesService
  ) {}
  //ionViewDidLoad() {
  //  this.quoteGroup = this.navParams.data;
  //}
  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }
  onAddToFavorite(quoteSelected: quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are You Sure',
      message: 'are you sure you want to add a quote?',
      buttons: [
        {
          text: 'Yes,Go Ahead',
          handler: () => {
            this.quoteService.addQuoteToFavorite(quoteSelected);
          }
        },
        {
          text: 'No.I changed my mind',
          handler: () => {
            console.log('cancelled');
          }
        }
      ]
    });
    alert.present();
  }
  isFavorite(quote) {
    return this.quoteService.isQuoteFavorite(quote);
  }
  removeFavorite(quote) {
    this.quoteService.removeQuoteFromFavorite(quote);
  }
}
