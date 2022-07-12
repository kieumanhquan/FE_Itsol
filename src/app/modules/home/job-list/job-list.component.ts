import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Job} from '../../../@core/models/job';
import {JobService} from '../../../@core/services/job.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss'],
})

export class JobListComponent implements OnInit {

  jobs: Job[];

  constructor(private jobService: JobService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs(){
    this.jobService.getJobList().subscribe(data => {
      this.jobs = data;
      console.log(this.jobs);
    });
  }

}




