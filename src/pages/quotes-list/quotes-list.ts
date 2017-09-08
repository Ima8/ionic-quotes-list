import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

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

  quotesList: Array<any> = [];
  filteredQuotes: Array<any> = [];
  isfiltered: boolean;

  constructor(private http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.isfiltered = false;
    this.http.get('quotes.json')
      .map(response => response.json())
      .subscribe(data => { // success
        this.quotesList = data.quotes;
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
    }else{
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
