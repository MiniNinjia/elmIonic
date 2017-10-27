import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController } from 'ionic-angular';
import {HomePage} from "../home/home";
import {IndetailsPage} from '../indetails/indetails'
import {ViewController, Content} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  item = [
    {
      "name": "效果演示",
      "address": "上海市静安区巨鹿路536-1",
      "id": 1,
      "latitude": 31.22166,
      "longitude": 121.45591,
      "location": [
        121.45591,
        31.22166
      ],
      "phone": "12356765432",
      "category": "快餐便当/简餐",
      "supports": [
        {
          "description": "已加入“外卖保”计划，食品安全有保障",
          "icon_color": "999999",
          "icon_name": "保",
          "id": 7,
          "name": "外卖保",
          "_id": "59a80c0dff11582da6e2c697"
        },
        {
          "description": "准时必达，超时秒赔",
          "icon_color": "57A9FF",
          "icon_name": "准",
          "id": 9,
          "name": "准时达",
          "_id": "59a80c0dff11582da6e2c696"
        },
        {
          "description": "该商家支持开发票，请在下单时填写好发票抬头",
          "icon_color": "999999",
          "icon_name": "票",
          "id": 4,
          "name": "开发票",
          "_id": "59a80c0dff11582da6e2c695"
        }
      ],
      "status": 0,
      "recent_order_num": 612,
      "rating_count": 610,
      "rating": 4.4,
      "promotion_info": "好好吃好好吃",
      "piecewise_agent_fee": {
        "tips": "配送费约¥5"
      },
      "opening_hours": [
        "8:30/20:30"
      ],
      "license": {
        "catering_service_license_image": "15e386eff0d5699.jpeg",
        "business_license_image": ""
      },
      "is_new": true,
      "is_premium": true,
      "image_path": "15e386ec1875697.jpeg",
      "identification": {
        "registered_number": "",
        "registered_address": "",
        "operation_period": "",
        "licenses_scope": "",
        "licenses_number": "",
        "licenses_date": "",
        "legal_person": "",
        "identificate_date": null,
        "identificate_agency": "",
        "company_name": ""
      },
      "float_minimum_order_amount": 20,
      "float_delivery_fee": 5,
      "distance": "",
      "order_lead_time": "",
      "description": "好吃的",
      "delivery_mode": {
        "color": "57A9FF",
        "id": 1,
        "is_solid": true,
        "text": "蜂鸟专送"
      },
      "activities": [
        {
          "icon_name": "减",
          "name": "满减优惠",
          "description": "满30减5，满60减8",
          "icon_color": "f07373",
          "id": 1,
          "_id": "59a80c0dff11582da6e2c698"
        }
      ],
      "__v": 0
    }

  ]
  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl: ViewController,public alertCtrl: AlertController,public modalCtrl: ModalController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }
  goo(){
    let modelPage=this.modalCtrl.create(IndetailsPage)
    modelPage.present();
    // this.navCtrl.push(IndetailsPage)
    // this.viewCtrl.dismiss();

  }
  disMiss() {
    this.navCtrl.push(HomePage)
    this.viewCtrl.dismiss();
    // let modelPage=this.modalCtrl.create(PostDetailPage)

  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }
}
