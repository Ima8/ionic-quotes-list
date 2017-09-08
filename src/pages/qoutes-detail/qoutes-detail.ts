import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QoutesDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-qoutes-detail',
  templateUrl: 'qoutes-detail.html',
})
export class QoutesDetailPage {
  quoteDetail: { quote: '', author: '' };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //console.log(navParams.data);
    this.quoteDetail = navParams.data ;
    console.log(this.quoteDetail);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QoutesDetailPage');
  }

}
