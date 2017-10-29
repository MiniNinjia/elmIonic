import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddNewAddressPage } from './add-new-address';

@NgModule({
  declarations: [
    AddNewAddressPage,
  ],
  imports: [
    IonicPageModule.forChild(AddNewAddressPage),
  ],
})
export class AddNewAddressPageModule {}
