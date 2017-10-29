import {Component} from '@angular/core';
import {ViewChild} from '@angular/core';
import {ViewController, Content, App} from 'ionic-angular';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {HomePage} from "../home/home";
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {ToastController} from 'ionic-angular';
// import { Storage } from '@ionic/storage';


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
  loginForm: FormGroup;
  username: any;
  password: any;

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController,
              private viewCtrl: ViewController,
              private appCtrl: App,
              // private storage:Storage,
              // private userSer:UsersService,
              private formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      telephone: ['', Validators.compose([Validators.minLength(11), Validators.maxLength(11), Validators.required, Validators.pattern("^(13[0-9]|15[012356789]|17[03678]|18[0-9]|14[57])[0-9]{8}$")])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
    this.username = this.loginForm.controls['telephone'];
    this.password = this.loginForm.controls['password'];
  }

  ionViewDidLoad() {

  }

  disMiss() {
    this.viewCtrl.dismiss();
  }
}
