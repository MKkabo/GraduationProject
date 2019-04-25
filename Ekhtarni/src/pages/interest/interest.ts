import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DbProvider } from '../../providers/db/db';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the InterestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-interest',
  templateUrl: 'interest.html',
})
export class InterestPage {
  form = [
    {
      val: 'Information System',
      isChecked: false
    },
    {
      val: 'Buisness',
      isChecked: false
    },
    {
      val: 'Finance',
      isChecked: false
    },
    {
      val: 'DataBase',
      isChecked: false
    },
    {
      val: 'Front-End',
      isChecked: false
    },
    {
      val: 'Back-End',
      isChecked: false
    }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams, public db: DbProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InterestPage');
  }


  submitForm(data) {
    let { value } = data;
    let selectedItems = Object.entries(value).filter(it => it[1]).map(it => it[0]);
    this.db.setUserProp(selectedItems, 'interests');
    this.navCtrl.setRoot(TabsPage);
  }

}
