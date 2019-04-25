import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InterestPage } from '../interest/interest';
import { DbProvider } from '../../providers/db/db';



@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public db: DbProvider) {
  }

  // register and go to home page
  register(data) {
    let { fullName, email, password } = data.value;
    console.log(data.value);
    this.db.setUser(data.value);
    this.navCtrl.setRoot(InterestPage);
  }

  // go to login page
  login() {
    this.navCtrl.setRoot(LoginPage);
  }
}
