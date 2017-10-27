import {Component} from '@angular/core';
import {ModalController, NavParams,NavController} from 'ionic-angular';
import 'rxjs/add/operator/toPromise';
import {ShopPage} from '../shop/shop';
import {RestaurantListPage} from '../restaurant-list/restaurant-list';
import {IndexServiceProvider} from '../../providers/index-service/index-service';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  a: Array<Array<any>>;
  Data = {
    slides_item: [
      {
        name: '粥',
        link: ''
      },
      {
        name: '肯德基',
        link: ''
      },
      {
        name: '来伊份',
        link: ''
      },
      {
        name: '麦当劳',
        link: ''
      },
      {
        name: '馄饨',
        link: ''
      },
      {
        name: '面',
        link: ''
      },
      {
        name: '饺子',
        link: ''
      },
      {
        name: '生煎',
        link: ''
      },
      {
        name: '包子',
        link: ''
      },
      {
        name: '牛肉面',
        link: ''
      },
    ],
    slides: [],
    restaurant: []
  };
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
  loading = true;

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public isp: IndexServiceProvider) {
  }

  go(id) {
    const profileModal = this.modalCtrl.create(ShopPage, {shopid: id});
    profileModal.present();
  }

  goRestaurant(item){
    const profileModal = this.modalCtrl.create(RestaurantListPage,{item:item});
    profileModal.present(); 
  }
  
  
  ionViewDidLoad() {
    this.isp.index_entry((result) => {
      let data = JSON.parse(result._body);
      let arr = [];
      data.forEach((item, index) => {
        arr.push(item);
        if (arr.length >= 8 || index == data.length - 1) {
          this.Data.slides.push(arr);
          arr = [];
        }
      });
    });
    this.getAllRestaurants(0, 5, function () {
    });
  }

  getAllRestaurants(offset, limit, callback) {
    this.postdata.offset = offset;
    this.postdata.limit = limit;
    this.isp.getAllRestaurants(this.postdata).then((data) => {
      this.Data.restaurant = this.Data.restaurant.concat(JSON.parse(data._body));
      setTimeout(() => {
        this.loading = false;
      }, 2000);
      callback(JSON.parse(data._body));
    })
  }

  doInfinite(infiniteScroll) {
    this.loading = true;
    this.getAllRestaurants(this.Data.restaurant.length + 1, 5, function (data) {
      setTimeout(() => {
        infiniteScroll.complete();
      }, 500);
      if (data.length == 0) {
        infiniteScroll.enable(false);
      }
    });
  }
}
