import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddNewAddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-new-address',
  templateUrl: 'add-new-address.html',
})
export class AddNewAddressPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  userid:any;
  callback:any;
  postData={
    user_id: this.navParams.get('userid') || null,
    address:null,
    address_detail:null,
    geohash:null,
    name:null,
    phone:null,
    tag:null,
    sex:null,
    poi_type:null,
    phone_bk:null,
    tag_type:null,
  };
  ionViewDidLoad() {
    this.userid = this.navParams.get('userid') || [];
    this.callback = this.navParams.get('callback');
  }

  disMiss(): void {
    this.callback().then(() => {
      this.navCtrl.pop()
    });
  }

}
