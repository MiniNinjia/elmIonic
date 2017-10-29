import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {GlobleServiceProvider} from '../globle-service/globle-service'
/*
  Generated class for the CityServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CityServiceProvider {

  constructor(public http: Http,
              public glo: GlobleServiceProvider) {
    // console.log('Hello CityServiceProvider Provider');
  }
  _url = this.glo.serverUrl;

  getcity(id, callback) {
    this.http.get(this._url + '/v1/cities?type='+ id).subscribe(
      function (result) {
        callback(result);
      }
    );
  }

}
