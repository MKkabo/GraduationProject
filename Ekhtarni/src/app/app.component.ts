import { profilePage } from './../pages/profile/profile';
import { IntroPage } from './../pages/intro/intro';
import { AboutPage } from './../pages/about/about';
import { SettingsPage } from './../pages/settings/settings';
import { Component, ViewChild } from '@angular/core';
import { Platform, App, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage:any = '';

  SettingsPage=SettingsPage;
  AboutPage=AboutPage;
  profilePage=profilePage;


@ViewChild(Nav) nav:Nav;

  constructor(platform: Platform,statusBar: StatusBar, splashScreen: SplashScreen,public app: App,public menuCtrl:MenuController) {
    if(window.localStorage.getItem("loggedIN"))
    {
      this.rootPage=TabsPage;
    }
    else{
      this.rootPage=IntroPage;
    }

    

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      
    });
    
  }
  
  logout()
  {
    window.localStorage.removeItem("loggedIN");
    this.app.getRootNav().setRoot(LoginPage);
  }

  onLoad(page:any) {

    this.nav.push(page);
    this.menuCtrl.close();
 
   }
   
    
}
