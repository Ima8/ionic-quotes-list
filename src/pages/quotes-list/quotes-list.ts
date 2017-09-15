import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QuotesDataProvider, Quote } from '../../providers/quotes-data/quotes-data'
import { QoutesDetailPage } from '../qoutes-detail/qoutes-detail';

/**
 * Generated class for the QuotesListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-quotes-list',
  templateUrl: 'quotes-list.html',
})
export class QuotesListPage {

  quotesList: Array<Quote> = [];
  filteredQuotes: Array<any> = [];
  isfiltered: boolean;

  constructor(
    public quotesData: QuotesDataProvider,
    public navCtrl: NavController,
    public navParams: NavParams) {
    this.isfiltered = false;

    this.quotesData.load()
      .subscribe(data => { // success
        this.quotesList = data;
      },
      error => { // error
        console.log("error is " + error)
      },
      () => { // complete
        console.log('read quotes Complete ' + this.quotesList)
      }
      );
  }
  searchQuotes(event) {
    if (event.target.value) {
      if (event.target.value.length > 2) {
        let filteredJson = this.quotesList.filter(row => {
          if (row.author.toLowerCase().indexOf(event.target.value.toLowerCase()) != -1) {
            return true;
          } else {
            return false;
          }
        });
        this.isfiltered = true;
        this.filteredQuotes = filteredJson;
      } else {
        this.isfiltered = false
      }
    } else {
      this.isfiltered = false
    }

  }

  itemTapped(quote) {
    console.log("test");
    this.navCtrl.push(QoutesDetailPage, quote);

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotesListPage');
    this.isfiltered = false
  }

}
