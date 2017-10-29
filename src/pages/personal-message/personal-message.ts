import { Component } from '@angular/core';
import { IonicPage,  NavController, NavParams,ViewController,ModalController } from 'ionic-angular';
import {PersonalPage}from '../../pages/personal/personal'
import {FileUploader} from 'ng2-file-upload';
import {PersonalChangeaddresPage}from'../personal-changeaddres/personal-changeaddres'
import {PersonalPasswordPage}from'../personal-password/personal-password'
import {PersonalNamePage}from'../personal-name/personal-name'
import {from} from "rxjs/observable/from";
/**
 * Generated class for the PersonalMessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personal-message',
  templateUrl: 'personal-message.html',
})
export class PersonalMessagePage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private viewCtrl:ViewController,
              public modalCtrl:ModalController) {
  }
  uploadimg = null;
  udata:string;
  imgurl:string='http://cangdu.org:8001/v1/addimg/:type';
  //uploader: FileUploader = new FileUploader({
  //  url: this.imgurl + '/upload',
  //  method: 'POST',
  //  avatar: 'Uimg'
  //});

  ionViewDidLoad() {
    this.udata=this.navParams.get('udata');
    //console.log(this.udata);
  }
  ionViewDidEnter(){
  }
  goto(){
    this.viewCtrl.dismiss();
  }
  goChangeName(){
 this.navCtrl.push(PersonalNamePage,{udat:this.udata})
  }
  goChangeAdress(){
    this.navCtrl.push(PersonalChangeaddresPage,{udata:this.udata});

  }
  goChangePas(){
    this.navCtrl.push(PersonalPasswordPage);
  }
  showPreview() {
//    console.log(this.uploader.queue[0]);
//  const that = this;
//  // 这里是文件选择完成后的操作处理
//  this.uploader.queue[0].onSuccess = (response, status, headers) => {
//  if (status === 200) {
//    that.uploadimg = JSON.parse(response).link;
//  } else {
//
//  }
//  that.uploader.clearQueue();
//};
//  this.uploader.queue[0].upload(); // 开始上传
}

}
