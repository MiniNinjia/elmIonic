import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodsPage } from './foods';

@NgModule({
  declarations: [
    FoodsPage,
  ],
  imports: [
    IonicPageModule.forChild(FoodsPage),
  ],
})
export class FoodsPageModule {}
