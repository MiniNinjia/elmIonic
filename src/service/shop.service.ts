/**
 * Created by Administrator on 2017/10/23.
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {MyConifg} from './MyConifg';
@Injectable()
export class ShopService {

  constructor(private http: Http,
              private MyConifg: MyConifg) {
  }

  _url = this.MyConifg.serverUrl;

  getdiaryList(postdata: any, callback) {
    this.http.post(this._url + '/diary', postdata).subscribe(
      function (result) {
        callback(result);
      }
    );
  }

  getfood(id, callback) {
    const params = new URLSearchParams();
    params.set('id', id);
    this.http.get(this._url + '/shopping/v2/menu', {search: params}).subscribe(
      function (result) {
        callback(result);
      }
    );
  }

}
