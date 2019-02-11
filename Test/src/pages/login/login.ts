import { TabsPage } from './../Tabs/tab';
import { HomePage } from './../home/home';
import { RegistrationPage } from './../registration/registration';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  username:string;
  password:string;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  
  Login(){

    this.navCtrl.setRoot(TabsPage);
    


  }

  GoToReg(){

    this.navCtrl.push(RegistrationPage);



  }

}
