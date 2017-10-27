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
import {ShopCartPage} from '../pages/shop-cart/shop-cart'
import {RestaurantListPage} from '../pages/restaurant-list/restaurant-list'

import {HttpModule} from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FoodServiceProvider } from '../providers/food-service/food-service';
import { GlobleServiceProvider } from '../providers/globle-service/globle-service';
import { RestaurantProvider } from '../providers/restaurant/restaurant';
import { IndexServiceProvider } from '../providers/index-service/index-service';


import {MyComponent} from '../components/my/my';
import {RestaurantComponent} from '../components/restaurant/restaurant';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ShopPage,
    ShopCartPage,
    MyComponent,
    RestaurantComponent,
    RestaurantListPage,
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
    MyComponent,
    RestaurantComponent,
    RestaurantListPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FoodServiceProvider,
    GlobleServiceProvider,
    RestaurantProvider,
    IndexServiceProvider
  ]
})
export class AppModule {}
