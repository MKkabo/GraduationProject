import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-rate',
  templateUrl: 'rate.html',
})
export class RatePage {
  rating: number = 5;
  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
    events.subscribe('star-rating:changed', (starRating) => {
      console.log(starRating);
      this.rating = starRating;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RatePage');
  }

}
