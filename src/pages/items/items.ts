import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";
import {ViewController, Content} from 'ionic-angular';
/**
 * Generated class for the ItemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-items',
  templateUrl: 'items.html',
})
export class ItemsPage {
  item=[
   {
     "name": "效果演示",
     "recent_order_num": '612',
     "tips": "配送费约¥5",
     "float_minimum_order_amount": '20',

   },
    {
      "name": "效果演示",
      "recent_order_num": '612',
      "tips": "配送费约¥5",
      "float_minimum_order_amount": '20',

    },
    {
      "name": "效果演示",
      "recent_order_num": '612',
      "tips": "配送费约¥5",
      "float_minimum_order_amount": '20',

    },
    {
      "name": "效果演示",
      "recent_order_num": '612',
      "tips": "配送费约¥5",
      "float_minimum_order_amount": '20',

    },  {
      "name": "效果演示",
      "recent_order_num": '612',
      "tips": "配送费约¥5",
      "float_minimum_order_amount": '20',

    },
    {
      "name": "效果演示",
      "recent_order_num": '612',
      "tips": "配送费约¥5",
      "float_minimum_order_amount": '20',

    }

 ]
  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl: ViewController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemsPage');
  }
  disMiss() {
    this.navCtrl.push(HomePage)
    this.viewCtrl.dismiss();
  }
}
