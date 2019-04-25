import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JobsDetailsPage } from './jobs-details';

@NgModule({
  declarations: [
    JobsDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(JobsDetailsPage),
  ],
})
export class JobsDetailsPageModule {}
