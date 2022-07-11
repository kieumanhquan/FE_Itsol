import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {WebHomeService} from '../../@core/services/web-home.service';
import {Job} from '../../@core/models/job';

import {catchError} from "rxjs/operators";
import {LocalData} from "@akveo/ng2-completer";
// import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'ngx-webhome',
  templateUrl: './web-home.component.html',
  styleUrls: ['./web-home.component.css']
})

export class WebHomeComponent implements OnInit {
  myDate = Date.now();
  jobs: Job[];
  // eslint-disable-next-line @typescript-eslint/naming-convention
  // FormSearch: FormGroup;
  constructor(private webHomeService: WebHomeService) { }
  foodData:any;
  ngOnInit(): void {
    this.webHomeService.getJobList().subscribe(data => {
      console.log(data);
      this.jobs = data;
      console.log(this.jobs);
    });
    // this.foodData = this.service.foodDetails;
  }
  onSubmit(): void{}
}
