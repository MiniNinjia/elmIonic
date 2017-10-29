import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalNamePage } from './personal-name';

@NgModule({
  declarations: [
    PersonalNamePage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalNamePage),
  ],
})
export class PersonalNamePageModule {}
