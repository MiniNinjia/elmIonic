import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the PersonalNamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personal-name',
  templateUrl: 'personal-name.html',
})
export class PersonalNamePage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl:ViewController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalNamePage');
  }
  goto(){
    this.viewCtrl.dismiss()
  }

}
