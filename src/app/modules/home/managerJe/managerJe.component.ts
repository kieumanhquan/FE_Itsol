import { Component, OnInit} from '@angular/core';
import {Je} from './managerJe.model';
import {ManagerJeService} from './managerJe.service';
import {PageEvent} from '@angular/material/paginator';
import {EditJeComponent} from './editJe/editJe.component';
import {ResJeComponent} from './resJe/resJe.component';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DeactiveComponent} from './deactive/deactive.component';

@Component({
  selector: 'ngx-managerJe',
  templateUrl: './managerJe.component.html',
  styleUrls: ['./managerJe.component.scss'],
}) export  class ManagerJeComponent implements OnInit{
  allJe: Je[];
  page = 0;
  size = 5;
  totalRecords: number;
  sort: String;
  jes: Je[];

  constructor(public dialog: MatDialog, private managerJeService: ManagerJeService ) {
  }
  ngOnInit(): void {
    this.getJe();
    this.getAllJe();
  }
  getAllJe() {
    this.managerJeService.getNumberJe().subscribe(res=> {
      this.allJe = res;
      this.totalRecords = this.allJe.length;
    });
  }
  getJe() {
    this.managerJeService.getJe(this.page, this.size).subscribe(
      res =>{
      this.jes = res;

    },
    );
  }

  onChangePage(event: any) {
    this.page = event.page;
    this.size = event.rows;
    this.getJe();

  }
  openDialog(id): void {
     this.dialog.open(EditJeComponent, {
       disableClose:true,
       data:({id1:id}),
     });
  }

  openDialog1(id): void {
    this.dialog.open(DeactiveComponent, {
      disableClose:true,
      data:({id2:id }),
    });
  }

  openDialog2(): void {
    this.dialog.open(ResJeComponent, {
      disableClose:true,
    });
  }

}

