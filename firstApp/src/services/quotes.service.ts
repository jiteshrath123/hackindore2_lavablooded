import { quote } from '../data/quotes.interface';

export class QuotesService {
  private favoriteQuotes: quote[] = [];
  addQuoteToFavorite(quote: quote) {
    this.favoriteQuotes.push(quote);
    console.log(this.favoriteQuotes);
  }

  removeQuoteFromFavorite(quote: quote) {
    const position = this.favoriteQuotes.findIndex((quoteEl: quote) => {
      return quoteEl.id == quote.id;
    });
    this.favoriteQuotes.splice(position, 1);
  }
  showFavoriteQuotes() {
    return this.favoriteQuotes.slice();
  }
  isQuoteFavorite(quote: quote) {
    return this.favoriteQuotes.find((quoteEl: quote) => {
      return quote.id == quoteEl.id;
    });
  }
}
