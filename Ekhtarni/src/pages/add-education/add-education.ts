import { StoreProvider } from './../../providers/store/store';
import { DbProvider } from './../../providers/db/db';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { profilePage } from '../profile/profile';

/**
 * Generated class for the AddEducationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-education',
  templateUrl: 'add-education.html',
})
export class AddEducationPage {
  dates = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, private db: DbProvider, private store: StoreProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEducationPage');
  }

  setDate(key, value) {
    this.dates[key] = value;
  }
  submitForm(f) {
    console.log(f.value);
    f.value['user_id'] = this.store.getUserId();
    this.db.addEducation(f.value).subscribe(res => {
      console.log(res);
      this.navCtrl.setRoot(profilePage);
    })
  }


}
