import { Injectable } from '@angular/core';
import { Http,URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import {GlobleServiceProvider} from '../globle-service/globle-service'

/*
  Generated class for the SearchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SearchProvider {

  constructor(public http: Http, public glo: GlobleServiceProvider) {
    console.log('Hello SearchProvider Provider');
  }
  _url = this.glo.serverUrl;

  search(keyword,geohash,callback) {
    const params = new URLSearchParams();
    params.set('keyword', keyword);
    params.set('geohash', geohash);
    this.http.get(this._url + '/v4/restaurants', {search: params} ).subscribe(
      function (result) {
        callback(result);
      }
    );
  }
}
