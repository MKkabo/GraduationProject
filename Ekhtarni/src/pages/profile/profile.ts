
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DbProvider } from '../../providers/db/db';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class profilePage {
  user: any;
  interests: string[];
  data = ['Data', 'Databse']
  constructor(public navCtrl: NavController, public navParams: NavParams, public db: DbProvider) {
  }

  ionViewDidLoad() {
    this.user = this.db.getUserData();
    this.interests = this.user.interests;
    console.log('ionViewDidLoad ProfilePage');
  }

}
