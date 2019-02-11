import { CvsPage } from './../pages/cvs/cvs';
import { TraningsPage } from './../pages/tranings/tranings';
import { JobsPage } from './../pages/jobs/jobs';
import { HomePage } from './../pages/home/home';
import { LoginPage } from './../pages/login/login';

import { ProfilePage } from './../pages/profile/profile';
import { SettingsPage } from './../pages/settings/settings';
import { TabsPage } from './../pages/Tabs/tab';
import { Component, ViewChild} from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//msh m7tago 3shan 8yart el root page el asasya le tabspage
//import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = LoginPage;
  loginpage=LoginPage;
  tabsPage=TabsPage;
  settingsPage=SettingsPage;
  profilePage=ProfilePage;
  homepage=HomePage;
  jobspage=JobsPage;
  traningspage=TraningsPage;
  cvspage=CvsPage;

  

  @ViewChild(`nav`) nav:NavController;

  constructor(private menuCtrl:MenuController,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      
    });
  }

  onLoad(page:any) {

    this.nav.push(page);
    this.menuCtrl.close();
 
   }




}

