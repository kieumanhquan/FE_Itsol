import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {WebHomeService} from '../../@core/services/web-home.service';
import {Job} from '../../@core/models/job';

// import {catchError} from "rxjs/operators";
// import {LocalData} from "@akveo/ng2-completer";
import {DatePipe} from '@angular/common';
import {SearchjobService} from '../../@core/services/searchjob.service';
// import {parseDate} from 'echarts/types/dist/shared';
// import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'ngx-searchjob',
  templateUrl: './searchjob.component.html',
  styleUrls: ['./searchjob.component.scss'],
})

export class SearchjobComponent implements OnInit {
  myDate= new Date();

  datePipe: DatePipe = new DatePipe('en-US');
  pDate = new Date('7-10-2022');
  jobs: Job[];
  // eslint-disable-next-line @typescript-eslint/naming-convention
  // FormSearch: FormGroup;
  constructor(private searchJobService: SearchjobService) {}
  foodData:any;
  ngOnInit(): void {

    // @ts-ignore

    // @ts-ignore

    this.webHomeService.getJobList().subscribe(data => {
      console.log(data);
      this.jobs = data;
      console.log(this.jobs);
    });
    // this.foodData = this.service.foodDetails;
  }
  countday(createDate: Date){
    const utc1 = Date.UTC(this.myDate.getFullYear(), this.myDate.getMonth(), this.myDate.getDate());
    const utc2 = Date.UTC(this.pDate.getFullYear(), this.pDate.getMonth(), this.pDate.getDate());
    return (utc1-utc2)/86400000;
  }
  onSubmit(): void{}
}
