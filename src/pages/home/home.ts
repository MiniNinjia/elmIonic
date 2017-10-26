import {Component} from '@angular/core';
import {Item, NavController} from 'ionic-angular';
import { ModalController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import {LoginPage} from "../login/login";
import {ShopPage} from '../shop/shop'
import {RegistPage} from "../regist/regist";
import {ItemsPage} from "../items/items";
import {DetailsPage} from "../details/details";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController) {

  }

  go() {
    const profileModal = this.modalCtrl.create(ShopPage, { shopid: 1 });
    profileModal.present();
  }
 login(){
    this.navCtrl.push(LoginPage);
  }
  regist(){
  this.navCtrl.push(RegistPage);

}
  items(){
    this.navCtrl.push(ItemsPage);

  }
  details(){
    this.navCtrl.push(DetailsPage);

  }

}
