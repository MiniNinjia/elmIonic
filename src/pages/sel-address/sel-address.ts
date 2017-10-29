import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {UserServiceProvider} from '../../providers/user-service/user-service';
import {AddNewAddressPage} from '../add-new-address/add-new-address'
/**
 * Generated class for the SelAddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sel-address',
  templateUrl: 'sel-address.html',
})
export class SelAddressPage {
  address: any;
  userid: any;
  callback: any;
  selIndex = 0;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public usp: UserServiceProvider) {
  }

  ionViewDidLoad() {
    this.userid = this.navParams.get('userid') || [];
    this.callback = this.navParams.get('callback');
    if (this.userid) {
      this.usp.getUseraddress(this.userid).then((data) => {
        this.address = data;
      })
    }
  }

  sel(i) {
    this.selIndex = i;
    this.disMiss();
  }

  disMiss(): void {
    this.callback(this.address[this.selIndex]).then(() => {
      this.navCtrl.pop()
    });
  }

  addNewAddress() {
    this.navCtrl.push(AddNewAddressPage, {userid: this.userid, callback: this.getData});
  }

  getData = () => {
    return new Promise((resolve, reject) => {
      if (this.userid) {
        this.usp.getUseraddress(this.userid).then((data) => {
          this.address = data;
          resolve();
        })
      }
    });
  };
}
