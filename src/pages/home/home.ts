import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { ModalController, NavParams } from 'ionic-angular';

import {ShopPage} from '../shop/shop'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController) {

  }

  go() {
    const profileModal = this.modalCtrl.create(ShopPage, { shopid: 1 });
    profileModal.present();
  }
}
