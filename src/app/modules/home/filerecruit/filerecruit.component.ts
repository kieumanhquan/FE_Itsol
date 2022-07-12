import {Component, OnInit} from '@angular/core';
import {Filerecruit} from './filerecruit';
import {JobregisterService} from '../../../@core/services/jobregister.service';
import {PageEvent} from '@angular/material/paginator';

// @ts-ignore
@Component({
  selector: 'ngx-filerecruit',
  templateUrl: './filerecruit.component.html',
  styleUrls: ['./filerecruit.component.scss'],
})
export class FilerecruitComponent implements OnInit {
  pageNo = 0;
  pageSize = 1;
  pageSizeOption: Number[] = [1, 2, 5, 10, 20, 50,];
  sort: String;
  // @ts-ignore
  filerecruit: Filerecruit[];

  constructor(private jobregisterService: JobregisterService) {
  }

  ngOnInit(): void {
    this.getFilerecruit();
  }


  getFilerecruit() {
    // @ts-ignore
    this.jobregisterService.getJobRegister(this.pageNo, this.pageSize).subscribe(data => {
      console.log("test")
      console.log(data);
      this.filerecruit = data;
    });
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  pageChanged(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageNo = event.pageIndex;
    this.getFilerecruit();
  }

}
