import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalServePage } from './personal-serve';

@NgModule({
  declarations: [
    PersonalServePage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalServePage),
  ],
})
export class PersonalServePageModule {}
