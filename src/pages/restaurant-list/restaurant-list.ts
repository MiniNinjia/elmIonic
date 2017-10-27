import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController, ViewController} from 'ionic-angular';
import {ShopPage} from '../shop/shop';
import {IndexServiceProvider} from '../../providers/index-service/index-service'
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
/**
 * Generated class for the RestaurantListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurant-list',
  templateUrl: 'restaurant-list.html',
//   animations: [
//     trigger('flyInOut', [
//       state('in', style({height: '*'})),
//       transition('void => *', [
//         animate(10000, style({height: '*'}))
//       ]),
//       transition('* => void', [
//         animate(10000, style({height: '0'}))
//       ])
//     ])
//   ]
})

export class RestaurantListPage {
  title: any;
  postdata = {
    latitude: 120.30176,
    longitude: 30.3084,
    offset: null,
    limit: null,
    restaurant_category_id: null,
    restaurant_category_ids: null,
    order_by: null,
    delivery_mode: null,
    support_ids: null
  };
  Data = {
    restaurant: [],
    category: []
  };

  loading = true;
  actived = 0;
  sub_categories = [];
  flag = 0;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public viewCtrl: ViewController,
              public isp: IndexServiceProvider) {

  }

  ionViewDidLoad() {
    let item = this.navParams.get('item');
    this.title = item.title;
    this.getAllRestaurants(0, 10, item.id, null, 4, (data) => {
      this.Data.restaurant = data;
      this.loading = true;
      this.isp.getCategory().then((data) => {
        this.Data.category = JSON.parse(data._body);
        this.loading = false;
      });
    });
  }

  //选择左边
  selectLeft(i) {
    this.actived = i;
    this.sub_categories = [];
    if (i != 0) {
      this.sub_categories = this.Data.category[i].sub_categories;
    } else {
      /////////////////////////////////////
      this.flag = 0;
      this.getAllRestaurants(0, 10, null, null, 4, (data) => {
        this.Data.restaurant = data;
      })
    }
  }

  //选择右边
  selectRight(i, index) {
    if (index == 0) {
      this.getAllRestaurants(0, 10, null, null, 4, (data) => {
        this.Data.restaurant = data;
      })
    } else {
      this.getAllRestaurants(0, 10, null, i, 4, (data) => {
        this.Data.restaurant = data;
      })
    }
    this.flag = 0;
  }

  getAllRestaurants(offset, limit, id, ids, order_by = 4, callback) {
    this.postdata.offset = offset;
    this.postdata.limit = limit;
    this.postdata.restaurant_category_id = id;
    this.postdata.restaurant_category_ids = ids;
    this.postdata.order_by = order_by;
    this.loading = true;
    this.isp.getAllRestaurants(this.postdata).then((data) => {
      setTimeout(() => {
        this.loading = false;
      }, 2000);
      callback(JSON.parse(data._body));
    })

  }

  cate(i) {
    this.flag = this.flag == i ? 0 : i;
  }

  go(id) {
    const profileModal = this.modalCtrl.create(ShopPage, {shopid: id});
    profileModal.present();
  }

  disMiss() {
    this.viewCtrl.dismiss();
  }

  doInfinite(infiniteScroll) {
    this.loading = true;
    this.getAllRestaurants(this.Data.restaurant.length + 1, 10, this.postdata.restaurant_category_id, this.postdata.restaurant_category_ids, 4, (data)=> {
      this.Data.restaurant=this.Data.restaurant.concat(data);
      setTimeout(() => {
        infiniteScroll.complete();
      }, 500);
      if (data.length == 0) {
        infiniteScroll.enable(false);
      }
    });
  }
}
