import { Component, OnInit } from '@angular/core';
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
              private router: Router) { }

  ngOnInit(): void {
    this.getJobs();
  }

  private getJobs(){
    this.jobService.getJobList().subscribe(data => {
      this.jobs = data;
      console.log(this.jobs);
    });
  }

  /*jobDetails(id: number){
    this.router.navigate(['Job-details', id]);
  }


  deleteJob(id: number){
    this.jobService.deleteJob(id).subscribe( data => {
      console.log(data);
      this.getJobs();
    });
  }*/
}
