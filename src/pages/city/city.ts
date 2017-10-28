import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { ModalController} from 'ionic-angular';
import {HomePage} from "../home/home";
import {LoginPage} from "../login/login";
import {CitydetailPage} from "../citydetail/citydetail";

/**
 * Generated class for the CityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-city',
  templateUrl: 'city.html',
})
export class CityPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CityPage');
  }

  disMiss(){
    let modelPage=this.modalCtrl.create(LoginPage)
    modelPage.present()
  }

  goo(){
    let modelPage=this.modalCtrl.create(CitydetailPage)
    modelPage.present()
  }

}
