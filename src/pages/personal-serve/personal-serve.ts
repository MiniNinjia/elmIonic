import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,ModalController } from 'ionic-angular';
import {PersonalQuestionPage}from'../personal-question/personal-question'
import {ExplainServiceProvider}from '../../providers/explain-service/explain-service'
import {PersonalQuestionPage}from'../personal-question/personal-question'
/**
 * Generated class for the PersonalServePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personal-serve',
  templateUrl: 'personal-serve.html',
})
export class PersonalServePage {
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private viewCtrl:ViewController,
              public modalCtrl:ModalController,
              public explainSer:ExplainServiceProvider) {
  }
  question=[];
  questions=[];
  answer:number;


  ionViewDidLoad() {
    this.explainSer.getAllExplain().then(data=>{
      for(let item in data){
        if(item.indexOf('Caption')!=-1){
          this.question.push(data[item]);
        }
      }
    })
  }
  goto(){
    this.viewCtrl.dismiss();
  }
  getanswer(i){
    var id=i;
    this.navCtrl.push(PersonalQuestionPage,{id})
  }

}
