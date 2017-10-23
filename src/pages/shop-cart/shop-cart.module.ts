import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopCartPage } from './shop-cart';

@NgModule({
  declarations: [
    ShopCartPage,
  ],
  imports: [
    IonicPageModule.forChild(ShopCartPage),
  ],
})
export class ShopCartPageModule {}
