import { EditProfilePage } from './../edit-profile/edit-profile';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public db: DbProvider) {
  }

  ionViewDidLoad() {
    this.db.getProfile().subscribe(res => {
      console.log(res);
      if(res['success'] === true) {
        this.user = res['profile'];
      }
    })
    // this.user = this.db.getUserData();
    // this.interests = this.user.interests;
    // console.log('ionViewDidLoad ProfilePage');
  }


  goToEditPage() {
    this.navCtrl.push(EditProfilePage, {
      profile: this.user
    })
  }

}
