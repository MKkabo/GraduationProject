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
    // let { value } = data;
    // console.log(this.form);
    let selectedItems = this.form.filter(it => it.isChecked).map(it => it.val);
    this.db.setUserProp(selectedItems, 'interests');
    console.log(this.db.getUserData());
    this.navCtrl.setRoot(TabsPage);
  }

}
