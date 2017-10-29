import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelAddressPage } from './sel-address';

@NgModule({
  declarations: [
    SelAddressPage,
  ],
  imports: [
    IonicPageModule.forChild(SelAddressPage),
  ],
})
export class SelAddressPageModule {}
