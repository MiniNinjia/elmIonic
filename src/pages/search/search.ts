import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import {HomePage} from "../home/home";
import {ViewController, Content} from 'ionic-angular';
import {ShopPage} from '../shop/shop';
import {SearchProvider} from '../../providers/search/search'

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  length = 0;
  searchTxt: any;
  result: any;
  history: any;
  flag = true;

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public navParams: NavParams,
              private viewCtrl: ViewController,
              public ps: SearchProvider) {
  }

  ionViewDidLoad() {
    this.length = this.navCtrl.length();
    this.history = JSON.parse(localStorage.getItem('history')) || [];
  };

  disMiss() {
    this.viewCtrl.dismiss();
  };

  nosearch() {
    this.searchTxt = '';
    this.flag = true;
  }

  search(txt = this.searchTxt) {
    this.history.unshift(txt);
    this.history = this.unique(this.history);
    localStorage.setItem('history', JSON.stringify(this.history));
    this.flag = false;
    this.ps.search(txt, '31.23037,121.473701', (result) => {
      this.result = JSON.parse(result._body);
      console.log(this.result);
    })
  };


  clear(i = 'all') {
    if (i == 'all') {
      this.history = [];
    } else {
      this.history.splice(i, 1)
    }
    localStorage.setItem('history', JSON.stringify(this.history))
  };

  unique(arr) {
    let res = [];
    let json = {};
    for (let i = 0; i < arr.length; i++) {
      if (!json[arr[i]]) {
        res.push(arr[i]);
        json[arr[i]] = 1;
      }
    }
    return res;
  }

  go(id) {
    const profileModal = this.modalCtrl.create(ShopPage, {shopid: id});
    profileModal.present();
  }

}
