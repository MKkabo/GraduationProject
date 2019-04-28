import { JobDetailsPage } from './../job-details/job-details';
import { NewsDetailsPage } from './../news-details/news-details';
import { Component } from '@angular/core';
import { NavController,App  } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    newsDetailsPage=NewsDetailsPage;
    jobDetailsPage=JobDetailsPage;

  constructor(public navCtrl: NavController,public app: App) {

  }
  onLoad(page:any) {

    this.navCtrl.push(page);
  
 
   }
 
}
