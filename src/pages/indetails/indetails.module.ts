import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IndetailsPage } from './indetails';

@NgModule({
  declarations: [
    IndetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(IndetailsPage),
  ],
})
export class IndetailsPageModule {}
