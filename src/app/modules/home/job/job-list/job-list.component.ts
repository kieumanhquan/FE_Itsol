import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {JobService} from '../../../../@core/services/job.service';
import {Router} from '@angular/router';
import {Job} from '../../../../@core/models/job';
import {PageEvent} from '@angular/material/paginator';
import html2canvas from 'html2canvas';
import {jsPDF} from 'jspdf';


@Component({
  selector: 'ngx-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss'],
})
export class JobListComponent implements OnInit {

  jobs: Job[];
  pageNo = 0;
  pageSize = 5;
  pageSizeOption: Number[] = [1, 2,5,10,20];
  sort: string;
  type = true;

  constructor(private jobService: JobService,
              private router: Router) { }

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs(){
    this.jobService.getJobPage(this.pageNo, this.pageSize).subscribe(data => {
      this.jobs = data;
      console.log(data);
    });
  }

  onChangePage(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageNo = event.pageIndex;
    this.getJobs();
  }

  sorttable(sortName: string) {
    this.sort = sortName;
    this.jobService.getListSort(this.pageNo, this.pageSize, this.sort, this.type).subscribe(data => {
      this.jobs = data;
      if (this.type) {
        this.type = false;
      } else {
        this.type = true;
      }

      console.log(data);
    });
  }

  gotoInsertJob() {
    this.router.navigate(['home/job/insert']);
  }

  gotoDetailJob(id: number) {
    this.router.navigate(['home/job/detail', id]);
  }

  gotoExportPDFJob(id: number) {
    // this.router.navigate(['job/exportPDF', id]);
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['job/exportPDF',id])
    );
    window.open(url, '_blank');
  }

  gotoPreviewJob(id: number) {
    // this.router.navigate(['home/job/detail', id]);
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/public/itsol_recruitment'])
    );
    window.open(url, '_blank');
  }

/*
  setPublishJob(id: number) {
    this.jobService.getJobById(this.router.snapshot.params['id']).
    subscribe(data => {
      this.job = data;
      console.log(this.job);
    });
    this.getCurrentUserRole();
  }*/

}
