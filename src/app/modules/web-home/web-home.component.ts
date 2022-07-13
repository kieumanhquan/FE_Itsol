import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {WebHomeService} from '../../@core/services/web-home.service';
import {Job} from '../../@core/models/job';

import {DatePipe} from '@angular/common';

@Component({
  selector: 'ngx-webhome',
  templateUrl: './web-home.component.html',
  styleUrls: ['./web-home.component.css']
})

export class WebHomeComponent implements OnInit {
  myDate= new Date();
  pDay = new Date('7-10-2022');
  datePipe: DatePipe = new DatePipe('en-US');
  jobs: Job[];
  // eslint-disable-next-line @typescript-eslint/naming-convention
  // FormSearch: FormGroup;
  constructor(private webHomeService: WebHomeService) {}
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
    const utc2 = Date.UTC(this.pDay.getFullYear(), this.pDay.getMonth(), this.pDay.getDate());
    return (utc1-utc2)/86400000;
  }
}
