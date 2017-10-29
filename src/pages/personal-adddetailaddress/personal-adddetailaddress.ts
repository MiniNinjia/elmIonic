import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,ModalController } from 'ionic-angular';
import {UserServiceProvider}from'../../providers/user-service/user-service'
import {PersonalAddadresPage}from'../personal-addadres/personal-addadres'
/**
 * Generated class for the PersonalAdddetailaddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personal-adddetailaddress',
  templateUrl: 'personal-adddetailaddress.html',
})
export class PersonalAdddetailaddressPage {
cid:any;
  addres:any
  flag=0;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl:ViewController,
              public modalCtrl:ModalController,
              private userSer:UserServiceProvider) {
  }

  ionViewDidLoad() {
    this.cid=this.navParams.get('cityid');
    this.flag=0;
    //console.log(this.cid);
    //console.log('ionViewDidLoad PersonalAdddetailaddressPage');
  }
  goto(){
    this.viewCtrl.dismiss();
  }
  searchads(ads){
   if(ads){
     this.userSer.getsearchaddress(this.cid,ads).then((data)=>{
       this.addres=data;
       //console.log(this.addres);
     });  this.flag=1;
   }
    else{
     this.flag=0
   }
  }
  goaddres(i){
    //this.navCtrl.push(PersonalAddadresPage);
    //console.log(i);
    let modelPage=this.modalCtrl.create(PersonalAddadresPage,{adsname:this.addres[i]});
    modelPage.onDidDismiss(() => {
    });

    modelPage.present();


    //this.navCtrl.pop({adsname:adsna});
  }

}
