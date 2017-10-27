import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,ViewController } from 'ionic-angular';
import {ShopPage} from '../shop/shop';
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
})
export class RestaurantListPage {
  title:any;
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
  constructor( public navCtrl: NavController,
               public navParams: NavParams,
               public modalCtrl: ModalController,
               public viewCtrl: ViewController,) {

  }

  ionViewDidLoad() {
    let item = this.navParams.get('item');
    this.title=item.title;
    this.postdata=item.id;
    console.log(this.postdata);
  }
 go(id) {
    const profileModal = this.modalCtrl.create(ShopPage, {shopid: id});
    profileModal.present();
  }
  disMiss(){
    this.viewCtrl.dismiss();
  }
}
