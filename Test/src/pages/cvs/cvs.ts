import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CvsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cvs',
  templateUrl: 'cvs.html',
})
export class CvsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  slideOpts = {
    effect: 'flip'
  };
}
