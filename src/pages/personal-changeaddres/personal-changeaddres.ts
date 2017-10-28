import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import {PersonalAddadresPage}from'../personal-addadres/personal-addadres'
import {from} from "rxjs/observable/from";

/**
 * Generated class for the PersonalChangeaddresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personal-changeaddres',
  templateUrl: 'personal-changeaddres.html',
})
export class PersonalChangeaddresPage {
  udata:any
  constructor(public navCtrl: NavController,
              public navParams: NavParams,public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    this.udata=this.navParams.get('udata');
    console.log('ionViewDidLoad PersonalChangeaddresPage');
  }
  goto(){
    this.viewCtrl.dismiss()
}
  goaddadrs(){
    this.navCtrl.push(PersonalAddadresPage)
  }
}
