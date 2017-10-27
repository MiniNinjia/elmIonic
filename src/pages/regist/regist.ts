import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";
import {ViewController, Content} from 'ionic-angular';
/**
 * Generated class for the RegistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-regist',
  templateUrl: 'regist.html',
})
export class RegistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl: ViewController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistPage');
  }
  disMiss() {
    this.navCtrl.push(HomePage)
    this.viewCtrl.dismiss();
  }
}
