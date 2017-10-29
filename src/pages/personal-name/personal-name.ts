import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

import { FormBuilder, Validators, FormGroup } from '@angular/forms';

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
  username: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl:ViewController ) {
  }
    udata:any
  ionViewDidLoad() {
    this.udata=this.navParams.get('udata');
    console.log('ionViewDidLoad PersonalNamePage');
  }
  goto(){
    this.viewCtrl.dismiss()
  }
  changeuname(){

  }

}
