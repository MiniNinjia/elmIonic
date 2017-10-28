import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {HttpModule} from '@angular/http';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';



import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {ShopPage} from '../pages/shop/shop'
import {PersonalPage} from '../pages/personal/personal'
import {PersonalServePage} from '../pages/personal-serve/personal-serve'
import {PersonalMessagePage} from '../pages/personal-message/personal-message'
import {PersonalChangeaddresPage}from'../pages/personal-changeaddres/personal-changeaddres'
import {PersonalAddadresPage}from'../pages/personal-addadres/personal-addadres'
import {PersonalPasswordPage}from'../pages/personal-password/personal-password'
import {PersonalNamePage}from'../pages/personal-name/personal-name'
import {PersonalQuestionPage}from'../pages/personal-question/personal-question'
import {LoginPage} from '../pages/login/login'
import {RegistPage} from '../pages/regist/regist'
import {ItemsPage} from '../pages/items/items'
import {DetailsPage} from '../pages/details/details'
import {IndetailsPage} from '../pages/indetails/indetails'
import {SearchPage} from '../pages/search/search'
import {ShopCartPage} from '../pages/shop-cart/shop-cart'
import {RestaurantListPage} from '../pages/restaurant-list/restaurant-list'
import {FoodsPage} from '../pages/foods/foods'
import {PayPage} from '../pages/pay/pay'





import {FoodServiceProvider} from '../providers/food-service/food-service';
import {GlobleServiceProvider} from '../providers/globle-service/globle-service';
import {ExplainServiceProvider} from '../providers/explain-service/explain-service';
import {UserServiceProvider}from'../providers/user-service/user-service'
import {RestaurantProvider} from '../providers/restaurant/restaurant';
import {IndexServiceProvider} from '../providers/index-service/index-service';
import {SearchProvider} from '../providers/search/search';
import { AddToCartProvider } from '../providers/add-to-cart/add-to-cart';

import {MyComponent} from '../components/my/my';
import {RestaurantComponent} from '../components/restaurant/restaurant';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    //ShopPage,
    PersonalPage,
    PersonalMessagePage,
    PersonalServePage,
    PersonalChangeaddresPage,
    PersonalAddadresPage,
    PersonalPasswordPage,
    PersonalQuestionPage,
    PersonalNamePage,
    PayPage,
    //婷
    ShopPage,
    LoginPage,
    RegistPage,
    ItemsPage,
    DetailsPage,
    IndetailsPage,
    SearchPage,
    ShopPage,
    ShopCartPage,
    MyComponent,
    RestaurantComponent,
    RestaurantListPage,
    FoodsPage

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: 'true'         //隐藏全部子页面tabs
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    //ShopPage,
    ShopCartPage,
    ShopPage,
    LoginPage,
    RegistPage,
    ItemsPage,
    DetailsPage,
    IndetailsPage,
    SearchPage,
    FoodsPage,
    PayPage,
    //婷
    ShopPage,
    PersonalPage,
    PersonalMessagePage,
    PersonalServePage,
    PersonalChangeaddresPage,
    PersonalAddadresPage,
    PersonalPasswordPage,
    PersonalQuestionPage,
    PersonalNamePage,
    MyComponent,
    RestaurantComponent,
    RestaurantListPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FoodServiceProvider,
    //GlobleServiceProvider,
    UserServiceProvider,
    ExplainServiceProvider,
    GlobleServiceProvider,
    RestaurantProvider,
    IndexServiceProvider,
    SearchProvider,
    AddToCartProvider
  ]
})
export class AppModule {
}
