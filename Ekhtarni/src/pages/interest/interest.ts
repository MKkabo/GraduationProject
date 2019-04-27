import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DbProvider } from '../../providers/db/db';
import { TabsPage } from '../tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-interest',
  templateUrl: 'interest.html',
})
export class InterestPage {
  form = [
    {
      val: 'Buisness',
      isChecked: false
    },
    {
      val: 'Finance',
      isChecked: false
    },
    {
      val: 'Information System',
      isChecked: false
    },
    {
      val: 'ERP',
      isChecked: false
    },
    {
      val: 'Web-Development',
      isChecked: false
    },
    {
      val: 'Security',
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
