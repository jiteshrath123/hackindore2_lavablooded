import { Component } from '@angular/core';
import { QuotesService } from '../../services/quotes.service';
import { quote } from '../../data/quotes.interface';
import { ModalController } from 'ionic-angular';
import { QuotePage } from '../quote/quote';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'page-favourite',
  templateUrl: 'favourite.html'
})
export class FavouritePage {
  quotes: quote[];

  constructor(
    private quoteService: QuotesService,
    private modalCtrl: ModalController,
    private http: HttpClient
  ) {}
  ionViewWillEnter() {
    this.quotes = this.quoteService.showFavoriteQuotes();
  }
  ionViewDidLoad() {
    this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/todos')
      .subscribe(data => console.log(data));
  }
  onViewQuote(quote: quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if (remove) {
        this.quoteService.removeQuoteFromFavorite(quote);
        const position = this.quotes.findIndex((quoteEl: quote) => {
          return quoteEl.id == quote.id;
        });
        this.quotes.splice(position, 1);
      }
      //this.quotes = this.quoteService.showFavoriteQuotes();
    });
  }
  removeFromFavorite(quote: quote) {
    this.quoteService.removeQuoteFromFavorite(quote);
    const position = this.quotes.findIndex((quoteEl: quote) => {
      return quoteEl.id == quote.id;
    });
    this.quotes.splice(position, 1);
  }
}
