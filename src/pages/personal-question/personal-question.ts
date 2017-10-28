import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,ModalController } from 'ionic-angular';
import {ExplainServiceProvider}from '../../providers/explain-service/explain-service'

/**
 * Generated class for the PersonalQuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personal-question',
  templateUrl: 'personal-question.html',
})
export class PersonalQuestionPage {
  question=[];
  questions=[];
  id:any;
  @ViewChild('html') _html:any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private viewCtrl:ViewController,
              public modalCtrl:ModalController,
              public explainSer:ExplainServiceProvider) {
  }
  ionViewDidLoad() {
    console.log(this._html);
    this.id=this.navParams.get('id');
    this.explainSer.getAllExplain().then(data=>{
      for(let item in data){
        //console.log(item);

        if(item.indexOf('Caption')!=-1){
          this.questions.push(data[item]);
        }

        if(item.indexOf('Content')!=-1){
          this.question.push(data[item]);

        }

      }
      this.question[4]=this.question[4].replace(/!\[\]\(/g,'<img src=\"');
      this.question[4]=this.question[4].replace(/\)/g,'\">');
      console.log(this.question[4]);
      if(this.id===4){
        this._html.nativeElement.innerHTML=this.question[4];
      }
    });
  }
  goto(){
    this.viewCtrl.dismiss();
  }
}
