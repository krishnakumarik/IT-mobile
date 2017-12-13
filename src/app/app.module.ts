import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {HttpClientModule} from '@angular/common/http';
import { RestProvider } from '../pages/providers/rest/rest';
import { DatePickerModule } from 'ion-datepicker';

//import {DatePickerModule} from 'ion-datepicker';
// import { CreateBookPage } from '../pages/create-book/create-book';
// import { LoginPage } from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,//CreateBookPage,LoginPage
 
    ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    DatePickerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,//CreateBookPage
   //,LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    
    HttpClientModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
