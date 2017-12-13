import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateBookPage } from './create-book';
import {DatePickerModule, DatePickerDirective} from 'ion-datepicker';

@NgModule({
  declarations: [
    CreateBookPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateBookPage),DatePickerModule
  ],
  exports:[
    CreateBookPage
  ],
  providers:[
    DatePickerDirective
  ],
  
})
export class CreateBookPageModule {}
