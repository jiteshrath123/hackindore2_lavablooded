import { Component, OnInit } from '@angular/core';
import { quote } from '../../data/quotes.interface';
import quotes from '../../data/quotes';
import { QuotesPage } from '../quotes/quotes';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage implements OnInit {
  quoteCollection: { category: string; quotes: quote[]; icon: string }[];
  quotePage = QuotesPage;
  ngOnInit() {
    this.quoteCollection = quotes;
  }
}
