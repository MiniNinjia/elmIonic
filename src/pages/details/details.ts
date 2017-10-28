import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import {HomePage} from "../home/home";
import {IndetailsPage} from '../indetails/indetails'
import {ViewController, Content} from 'ionic-angular';
import {AlertController} from 'ionic-angular';
/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  item: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private viewCtrl: ViewController,
              public alertCtrl: AlertController,
              public modalCtrl: ModalController,) {
  }
  ionViewDidLoad() {
    this.item = this.navParams.get('item');
    console.log(this.item);
  }

  goo() {
    let modelPage = this.modalCtrl.create(IndetailsPage, {item: this.item})
    modelPage.present();
  }

  disMiss() {
    this.viewCtrl.dismiss();
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }

}
