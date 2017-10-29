import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import {PersonalAddadresPage}from'../personal-addadres/personal-addadres'
import {UserServiceProvider}from '../../providers/user-service/user-service'
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
  providers:[UserServiceProvider]
})
export class PersonalChangeaddresPage {
  udata:any;
  uid:any;
  uaddres:any;
  cityid:any
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl:ViewController,
              private userSer:UserServiceProvider) {
  }

  ionViewDidLoad() {
    this.udata=this.navParams.get('udata');
    this.uid=this.udata.id;
    //console.log(this.uid);
    this.userSer.getUseraddress(this.uid).then((data)=>{
      this.uaddres=data;
      //console.log(this.uaddres);
      this.cityid=this.uaddres[0].city_id;
      //console.log(this.cityid);

    });
    console.log('ionViewDidLoad PersonalChangeaddresPage');
  }
  goto(){
    this.viewCtrl.dismiss()
}
  goaddadrs(){
    this.navCtrl.push(PersonalAddadresPage,{cid:this.cityid,uid:this.uid})
  }
}
