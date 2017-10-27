import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalPasswordPage } from './personal-password';

@NgModule({
  declarations: [
    PersonalPasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalPasswordPage),
  ],
})
export class PersonalPasswordPageModule {}
