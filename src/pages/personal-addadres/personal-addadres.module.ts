import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalAddadresPage } from './personal-addadres';

@NgModule({
  declarations: [
    PersonalAddadresPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalAddadresPage),
  ],
})
export class PersonalAddadresPageModule {}
