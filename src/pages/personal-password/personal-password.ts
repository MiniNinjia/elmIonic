import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import {UserServiceProvider}from '../../providers/user-service/user-service'
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

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
  providers:[UserServiceProvider]
})
export class PersonalPasswordPage {
  code:any;
  username:any;
  oldpassWord:any;
  newpassword:any;
  confirmpassword:any;
  captcha_code:any;
  passForm:FormGroup;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl:ViewController,
              private userSer:UserServiceProvider,
              private formBuilder: FormBuilder)  {
    this.passForm = formBuilder.group({
      username:[''],
      oldpassWord:[''],
      newpassword:[''],
      confirmpassword:[''],
      captcha_code:['']
    });
    this.username =    this.passForm.controls['username'];
    this.oldpassWord = this.passForm.controls['oldpassWord'];
    this.newpassword = this.passForm.controls['newpassword'];
    this.confirmpassword = this.passForm.controls['confirmpassword'];
    this.captcha_code = this.passForm.controls['captcha_code'];

  }

  ionViewDidLoad() {
    this.userSer.getcode().then((data) => {
      this.code=data;
      console.log(this.code);
    })
    console.log('ionViewDidLoad PersonalPasswordPage');
  }
  goto(){
    this.viewCtrl.dismiss();
  }
  changeother(){
    this.userSer.getcode().then((data) => {
      this.code=data;
  })
  }

  pass(passdata){
    this.userSer.changePassword(passdata).then((data)=>{
      //console.log(data);
    });
  }
}
