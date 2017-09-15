import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

/*
  Generated class for the QuotesDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class QuotesDataProvider {

  constructor(public http: Http) {
    console.log('Hello QuotesDataProvider Provider');
  }

  load(): Observable<Quote[]> {
    return this.http.get('http://web.sit.kmutt.ac.th/sanit/quotes.php')
      .map(res => res.json().quotes)
  }
}

export class Quote {
  quote: string;
  author: string;
}
