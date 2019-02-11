import { RegistrationPage } from './../pages/registration/registration';
import { LoginPage } from './../pages/login/login';

import { ProfilePage } from './../pages/profile/profile';
import { SettingsPage } from './../pages/settings/settings';
import { TabsPage } from './../pages/Tabs/tab';
import { CvsPage } from './../pages/cvs/cvs';
import { TraningsPage } from './../pages/tranings/tranings';
import { JobsPage } from './../pages/jobs/jobs';


import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    JobsPage,
    TraningsPage,
    CvsPage,
    TabsPage,
    SettingsPage,
    ProfilePage,
    LoginPage,
    RegistrationPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage ,
    JobsPage,
    TraningsPage,
    CvsPage,
    TabsPage,
    SettingsPage,
    ProfilePage,
    LoginPage,
    RegistrationPage
   
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
