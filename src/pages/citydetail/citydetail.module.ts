import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CitydetailPage } from './citydetail';

@NgModule({
  declarations: [
    CitydetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CitydetailPage),
  ],
})
export class CitydetailPageModule {}
