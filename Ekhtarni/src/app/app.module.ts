import { JobDetailsPage } from './../pages/job-details/job-details';
import { CDetailsPage } from './../pages/c-details/c-details';
import { InterestPage } from './../pages/interest/interest';
import { profilePage } from './../pages/profile/profile';
import { CoursesPage } from './../pages/courses/courses';
import { IntroPage } from './../pages/intro/intro';
import { SettingsPage } from './../pages/settings/settings';
import { RegisterPage } from './../pages/register/register';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { HttpClientModule } from '@angular/common/http'
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DbProvider } from '../providers/db/db';
import { FormsModule } from '@angular/forms'
import { NewsDetailsPage } from '../pages/news-details/news-details';
import { RatePage } from '../pages/rate/rate';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    SettingsPage,
    IntroPage,
    CoursesPage,
    profilePage,
    InterestPage,
    CDetailsPage,
    NewsDetailsPage,
    RatePage,
    JobDetailsPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    SettingsPage,
    IntroPage,
    CoursesPage,
    profilePage,
    InterestPage,
    CDetailsPage,
    NewsDetailsPage,
    RatePage,
    JobDetailsPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DbProvider
  ]
})
export class AppModule { }
