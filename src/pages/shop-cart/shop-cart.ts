import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShopCartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shop-cart',
  templateUrl: 'shop-cart.html',
})
export class ShopCartPage {
  cartData:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    if (this.navParams.data) {
      this.cartData = this.navParams.data.cartData;
      console.log(this.cartData)
    }
  }
}
