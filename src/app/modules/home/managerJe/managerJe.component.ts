import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Je} from './managerJe.model';
import {ManagerJeService} from './managerJe.service';import {HttpErrorResponse} from '@angular/common/http';
import {PageEvent} from '@angular/material/paginator';
import {EditJeComponent} from './editJe/editJe.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'ngx-managerJe',
  templateUrl: './managerJe.component.html',
  styleUrls: ['./managerJe.component.scss'],
}) export  class ManagerJeComponent implements OnInit{
  pageNo =0;
  pageSize=5;
  pageSizeOption: Number[] = [1, 2, 5, 10, 20, 50];
  sort: String;
  jes: Je[];
  id:number;

  constructor(public dialog: MatDialog, private managerJeService: ManagerJeService ) {
  }
  ngOnInit(): void {
    this.getJe();
  }

  getJe() {
    this.managerJeService.getJe(this.pageNo, this.pageSize).subscribe(
      res =>{
      this.jes = res;
    },
    );
  }
  onChangePage(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageNo = event.pageIndex;
    this.getJe();
  }
  openDialog(id): void {
     this.dialog.open(EditJeComponent, {
       disableClose:true,
       data:({id1:id}),
     });

  }
}

