import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the JobsDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jobs-details',
  templateUrl: 'jobs-details.html',
})
export class JobsDetailsPage {

  isFavorite = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  toggleFavorite() {
    
      this.isFavorite = true;
    

}
}
