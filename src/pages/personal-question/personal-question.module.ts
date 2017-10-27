import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalQuestionPage } from './personal-question';

@NgModule({
  declarations: [
    PersonalQuestionPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalQuestionPage),
  ],
})
export class PersonalQuestionPageModule {}
