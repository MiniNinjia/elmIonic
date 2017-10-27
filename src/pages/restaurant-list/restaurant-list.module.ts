import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestaurantListPage } from './restaurant-list';

@NgModule({
  declarations: [
    RestaurantListPage,
  ],
  imports: [
    IonicPageModule.forChild(RestaurantListPage),
  ],
})
export class RestaurantListPageModule {}
