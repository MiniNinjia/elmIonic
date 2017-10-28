import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {ShopPage} from '../pages/shop/shop'
import {LoginPage} from '../pages/login/login'
import {RegistPage} from '../pages/regist/regist'
import {ItemsPage} from '../pages/items/items'
import {DetailsPage} from '../pages/details/details'
import {IndetailsPage} from '../pages/indetails/indetails'
import {SearchPage} from '../pages/search/search'
import {ShopCartPage} from '../pages/shop-cart/shop-cart'
import {FoodsPage} from '../pages/foods/foods'
import {CityPage} from '../pages/city/city'
import {CitydetailPage} from '../pages/citydetail/citydetail'

import {HttpModule} from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FoodServiceProvider } from '../providers/food-service/food-service';
import { GlobleServiceProvider } from '../providers/globle-service/globle-service';


import { RestaurantProvider } from '../providers/restaurant/restaurant';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ShopPage,
    LoginPage,
    RegistPage,
    ItemsPage,
    DetailsPage,
    IndetailsPage,
    SearchPage,
    ShopPage,
    ShopCartPage,
    FoodsPage,
    CityPage,
    CitydetailPage

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
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
    ShopCartPage,
    ShopPage,
    LoginPage,
    RegistPage,
    ItemsPage,
    DetailsPage,
    IndetailsPage,
    SearchPage,
    FoodsPage,
    CityPage,
    CitydetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FoodServiceProvider,
    GlobleServiceProvider,
    RestaurantProvider,

  ]


})
export class AppModule {}
