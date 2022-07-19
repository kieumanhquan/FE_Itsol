import {Component, OnInit} from '@angular/core';
import {Filerecruit} from './filerecruit';
import {JobregisterService} from '../../../@core/services/jobregister.service';
import {PageEvent} from '@angular/material/paginator';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {DataService} from '../../../@core/services/dataservice.service';

// @ts-ignore
@Component({
  selector: 'ngx-filerecruit',
  templateUrl: './filerecruit.component.html',
  styleUrls: ['./filerecruit.component.scss'],
})
export class FilerecruitComponent implements OnInit {
  // pageNo = 0;
  // pageSize = 5;
  // totalRecords = 5;
  page = 0;
  size = 2;
  totalRecords: any;
  // @ts-ignore
  pageSizeOption: Number[] = [1, 2, 3, 4, 10, 20];
  sort = 'dateRegister';
  type = true;
  // @ts-ignore
  filerecruit: Filerecruit[];
  change: any;

  // pageQuantity= 5;

  constructor(private jobregisterService: JobregisterService, private fb: FormBuilder, private router: Router,
              public dataService: DataService) {
  }

  ngOnInit(): void {
    this.getFilerecruit();
    this.getAllRecord();
  }

  getAllRecord() {
    this.jobregisterService.getTotal().subscribe(data =>{
      this.totalRecords = data;
    });
  }

  getFilerecruit() {
    this.jobregisterService.getJobRegister(this.page, this.size).subscribe(data => {
      this.filerecruit = data;
    });
  }

  // onChangePage(event: PageEvent) {
  //   this.pageSize = event.pageSize;
  //   this.pageNo = event.pageIndex;
  //   // this.pageQuantity = (this.pageNo + 1) * this.pageNo;
  //   this.getFilerecruit();
  // }

  onChangePage(event: any) {
    this.page = event.page;
    this.size = event.rows;
    console.log(this.totalRecords);
    this.getFilerecruit();

  }


  sorttable() {
    this.jobregisterService.getListSort(this.page, this.size, this.sort, this.type).subscribe(data => {
      this.filerecruit = data;
      if (this.type) {
        this.type = false;
      } else {
        this.type = true;
      }

      console.log(data);
    });
  }

  getReason(filerecruits: any) {
    alert(filerecruits.reason);
    console.log(filerecruits.reason);
  }

  getjobPosition(filerecruits) {
    this.router.navigate(['home/job']);
  }

  // @ts-ignore
  getjobRegStatus(filerecruit: any) {
    console.log(filerecruit);
    this.dataService.setIdJobRegis(filerecruit);
    this.router.navigate(['home/regdetail']);
  }

  changeDetailFile(filerecruits: any) {
    this.dataService.setIdJobRegis(filerecruits.id);
    console.log(filerecruits.id);
    this.dataService.setStatus(filerecruits.status);
    this.router.navigate(['home/detailfile']);
  }
}
