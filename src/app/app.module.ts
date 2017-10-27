import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {HttpModule} from '@angular/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {ShopPage} from '../pages/shop/shop'
import {PersonalPage} from '../pages/personal/personal'
import {PersonalServePage} from '../pages/personal-serve/personal-serve'
import {PersonalMessagePage} from '../pages/personal-message/personal-message'
import {PersonalChangeaddresPage}from'../pages/personal-changeaddres/personal-changeaddres'
import {PersonalAddadresPage}from'../pages/personal-addadres/personal-addadres'
import {PersonalPasswordPage}from'../pages/personal-password/personal-password'
import {PersonalNamePage}from'../pages/personal-name/personal-name'
import {PersonalQuestionPage}from'../pages/personal-question/personal-question'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FoodServiceProvider } from '../providers/food-service/food-service';
import { GlobleServiceProvider } from '../providers/globle-service/globle-service';
import {from} from "rxjs/observable/from";

import { ExplainServiceProvider } from '../providers/explain-service/explain-service';
import {UserServiceProvider}from'../providers/user-service/user-service'
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ShopPage,
    PersonalPage,
    PersonalMessagePage,
    PersonalServePage,
    PersonalChangeaddresPage,
    PersonalAddadresPage,
    PersonalPasswordPage,
    PersonalQuestionPage,
    PersonalNamePage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ShopPage,
    PersonalPage,
    PersonalMessagePage,
    PersonalServePage,
    PersonalChangeaddresPage,
    PersonalAddadresPage,
    PersonalPasswordPage,
    PersonalQuestionPage,
    PersonalNamePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FoodServiceProvider,
    GlobleServiceProvider,
    UserServiceProvider,
    ExplainServiceProvider,
  ]
})
export class AppModule {}
