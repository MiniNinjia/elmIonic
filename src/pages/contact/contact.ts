import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';
import {ShopPage} from '../shop/shop'

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,) {

  }

  go(id) {
    const profileModal = this.modalCtrl.create(ShopPage, {shopid: id});
    profileModal.present();
  }

}
