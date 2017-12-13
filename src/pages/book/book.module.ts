import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookPage } from './book';
import { DatePickerDirective } from 'ion-datepicker';

@NgModule({
  declarations: [
    BookPage,
  ],
  imports: [
    IonicPageModule.forChild(BookPage),
  ],
  providers:[
    DatePickerDirective
  ]
})
export class BookPageModule {}
