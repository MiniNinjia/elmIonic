import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import {CityPage} from "../city/city";

/**
 * Generated class for the CitydetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-citydetail',
  templateUrl: 'citydetail.html',
})
export class CitydetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CitydetailPage');
  }

  disMiss(){
    // this.navCtrl.push(CityPage)
    this.viewCtrl.dismiss();
  }

}
