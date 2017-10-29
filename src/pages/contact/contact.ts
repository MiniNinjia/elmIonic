import { Component } from '@angular/core';
import { NavController,ModalController,ViewController } from 'ionic-angular';
import {ShopPage} from '../shop/shop'
import {HomePage} from "../home/home";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              private viewCtrl: ViewController,) {

  }
  disMiss(){
    this.navCtrl.push(HomePage)
    this.viewCtrl.dismiss();
  }
}
