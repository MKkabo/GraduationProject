import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-c-details',
  templateUrl: 'c-details.html',
})
export class CDetailsPage {
  course: any;
  randRate: number | string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.course = navParams.get('course');
    this.randRate =  (Math.random() * 5).toFixed(1) 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CDetailsPage');
  }

}
