import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalMessagePage } from './personal-message';
import {FileUploadModule} from 'ng2-file-upload';
import {CommonModule} from '@angular/common';
@NgModule({
  declarations: [
    PersonalMessagePage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalMessagePage),
    CommonModule,
    FileUploadModule
  ],
})
export class PersonalMessagePageModule {}
