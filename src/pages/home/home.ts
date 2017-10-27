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
import {FoodsPage} from "../foods/foods";

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
   let modelPage=this.modalCtrl.create(LoginPage)
   modelPage.present()
  }
  regist(){
    let modelPage=this.modalCtrl.create(RegistPage)
    modelPage.present()

}
  items(){
    let modelPage=this.modalCtrl.create(ItemsPage)
    modelPage.present()

  }
  details(){
    let modelPage=this.modalCtrl.create(DetailsPage)
    modelPage.present();
  }
　foods(){
   let modelPage=this.modalCtrl.create(FoodsPage)
   modelPage.present();
 }
}
