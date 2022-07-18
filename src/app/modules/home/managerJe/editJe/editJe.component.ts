import {Component, Inject,  OnInit} from "@angular/core";

import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'ngx-editJe',
  templateUrl: './editJe.component.html',
  styleUrls: ['./editJe.component.scss'],
}) export class EditJeComponent implements OnInit{
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }
  ngOnInit(): void {
    console.log(this.data.id1);
  }

}
