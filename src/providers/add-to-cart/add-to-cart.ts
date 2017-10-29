import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {GlobleServiceProvider} from '../globle-service/globle-service'
/*
 Generated class for the AddToCartProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
@Injectable()
export class AddToCartProvider {

  constructor(public http: Http,
              public glo: GlobleServiceProvider) {
  }

  _url = this.glo.serverUrl;

  //加入购物车
  checkout(data): Promise<any> {
    return this.http.post(this._url + '/v1/carts/checkout', data).toPromise().then(response => response);
  };
}
