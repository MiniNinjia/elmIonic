import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the PersonalPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personal-password',
  templateUrl: 'personal-password.html',
})
export class PersonalPasswordPage {
  constructor(public navCtrl: NavController,
              public navParams: NavParams,public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalPasswordPage');
  }
  goto(){
    this.viewCtrl.dismiss();
  }

}
