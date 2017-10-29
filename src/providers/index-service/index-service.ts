import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {GlobleServiceProvider} from '../globle-service/globle-service'
/*
 Generated class for the IndexServiceProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
@Injectable()
export class IndexServiceProvider {

  constructor(public http: Http,
              public glo: GlobleServiceProvider) {
  }

  _url = this.glo.serverUrl;

  //获取主页分类轮播
  index_entry(callback) {
    this.http.get(this._url + '/v2/index_entry').subscribe(
      function (result) {
        callback(result);
      }
    );
  };

  //获取餐厅列表
  getAllRestaurants(data: any): Promise<any> {
    const params = new URLSearchParams();
    params.set('latitude', data.latitude || 121.45591);
    params.set('longitude', data.longitude || 31.22166);
    params.set('offset', data.offset || 0);
    params.set('limit', data.limit || 5);
    data.restaurant_category_id && params.set('restaurant_category_id', data.restaurant_category_id);
    data.restaurant_category_ids && params.set('restaurant_category_ids[]', data.restaurant_category_ids);
    params.set('order_by', data.order_by || 4);
    data.delivery_mode && params.set('delivery_mode', data.delivery_mode);
    data.support_ids && params.set('support_ids', data.support_ids);
    return this.http.get(this._url + '/shopping/restaurants', {search: params}).toPromise().then(response => response);
  };

  //获取全部分类列表
  getCategory(): Promise<any> {
    return this.http.get(this._url + '/shopping/v2/restaurant/category').toPromise().then(response => response);
  };

}
