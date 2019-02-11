import { CvsPage } from './../cvs/cvs';
import { TraningsPage } from './../tranings/tranings';
import { JobsPage } from './../jobs/jobs';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';


@Component({
    
    selector:'page-tabs',
    templateUrl: 'tab.html'



})
export class TabsPage {

    homepage=HomePage;
    jobspage=JobsPage;
    traningspage=TraningsPage;
    cvspage=CvsPage;




}