import { Component } from '@angular/core';
import {ViewChild} from '@angular/core';
import {ViewController, Content} from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import {HomePage} from "../home/home";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
//
// import 'rxjs/add/operator/toPromise';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  // providers:[UsersService]
})
export class LoginPage {
  // loginForm: FormGroup;
  // username: any;
  // password: any;
  constructor(    private navCtrl: NavController,
                  private navParams: NavParams,
                  private alertCtrl: AlertController,
                  // private toastCtrl: ToastController,
                  private viewCtrl: ViewController,
                  // private appCtrl: App,
                  // private storage:Storage,
                  // private userSer:UsersService,
                  private formBuilder: FormBuilder) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  disMiss() {
    this.navCtrl.push(HomePage)
    this.viewCtrl.dismiss();
  }
}
