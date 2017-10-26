import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {GlobleServiceProvider} from '../globle-service/globle-service'

/*
  Generated class for the RestaurantProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestaurantProvider {

  constructor(public http: Http,
              public glo: GlobleServiceProvider) {
  }
  _url = this.glo.serverUrl;

  getRestaurant(id, callback) {
    this.http.get(this._url + '/shopping/restaurant/'+ id ).subscribe(
      function (result) {
        callback(result);
      }
    );
  };
}
