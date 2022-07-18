import { Component, OnInit } from '@angular/core';
import {JobService} from '../../../../@core/services/job.service';
import {Router} from '@angular/router';
import {Job} from '../../../../@core/models/job';

@Component({
  selector: 'ngx-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss'],
})
export class JobListComponent implements OnInit {

  jobs: Job[];

  constructor(private jobService: JobService,
              private router: Router) { }

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs(){
    this.jobService.getJobList().subscribe(data => {
      this.jobs = data;
      console.log(this.jobs);
    });
  }

  gotoInsertJob() {
    this.router.navigate(['home/job/insert']);
  }

  gotoDetailJob(id: number) {
    this.router.navigate(['home/job/detail', id]);
  }


}
