import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import {PersonalAdddetailaddressPage}from'../personal-adddetailaddress/personal-adddetailaddress'
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {from} from "rxjs/observable/from";
/**
 * Generated class for the PersonalAddadresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personal-addadres',
  templateUrl: 'personal-addadres.html',
})
export class PersonalAddadresPage {
  cid:any;
  adsname:any = {};
  addadresForm:any;
  name:any;
  user_id:any;
  address:any;
  address_detail:any;
  phone :any;
  phone_bk:any;
  geohash:any;
  tag:any;
  sex:any;
  poi_type:any;
  tag_type:any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl:ViewController,
              private formBuilder: FormBuilder) {
    //this.addadresForm = formBuilder.group({
    //  //user_id:'',
    //  name:[''],
    //  address:[''],
    //  address_detail:[''],
    //  phone:['',Validators.compose([Validators.minLength(11), Validators.maxLength(11), Validators.required, Validators.pattern("^(13[0-9]|15[012356789]|17[03678]|18[0-9]|14[57])[0-9]{8}$")])],
    //  phone_bk:[''],
    //  //geohash:[''],
    //  //tag:['家'],
    //  //sex:['1'],
    //  //poi_type:['0'],
    //  //tag_type:['2']
    //});

     //this.name= this.addadresForm.controls['name'];
     //this.address= this.addadresForm.controls['address'];
     //this.address_detail=this.addadresForm.controls['address_detail'];
     //this.phone = this.addadresForm.controls['phone'];
     //this.phone_bk= this.addadresForm.controls['phone_bk'];

  }

  ionViewDidLoad() {
    this.adsname=this.navParams.get('adsname');
    //console.log(this.adsname);
    //console.log(this.adsname.geohash);
    //this.geohash=this.adsname.geohash;
    console.log();
    this.cid=this.navParams.get('cid');
    this.user_id=this.navParams.get('uid');
  }

  goto(){
    this.viewCtrl.dismiss()
  }
  godetail(){
    this.navCtrl.push(PersonalAdddetailaddressPage,{cityid:this.cid})
  }
  addres(addaddres){
    this.geohash=this.adsname.name;
    //console.log(this.adsname.name);

  }
}
