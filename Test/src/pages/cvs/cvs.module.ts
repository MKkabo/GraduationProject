import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CvsPage } from './cvs';

@NgModule({
  declarations: [
    CvsPage,
  ],
  imports: [
    IonicPageModule.forChild(CvsPage),
  ],
})
export class CvsPageModule {}
