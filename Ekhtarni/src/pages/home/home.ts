import { DbProvider } from './../../providers/db/db';
import { JobDetailsPage } from './../job-details/job-details';
import { NewsDetailsPage } from './../news-details/news-details';
import { Component } from '@angular/core';
import { NavController, App, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    newsDetailsPage=NewsDetailsPage;
    jobDetailsPage=JobDetailsPage;
    jobs: any;
  constructor(public navCtrl: NavController,public app: App, public navParams: NavParams, public db: DbProvider) {

  }
  onLoad(page:any,job: any) {

    this.navCtrl.push(page, {
      job: job
    });
  
 
   }
   ionViewDidLoad(){
    console.log('welcome to jobs');
    this.db.getJobs().subscribe(res =>{
      if (res['success'] === true) {
        this.jobs = res['jobs'];
      }

    })
   }

 
}
