import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DetailfileService} from '../../../../../@core/services/detailfile.service';
import {DataService} from '../../../../../@core/services/dataservice.service';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormControlName, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'ngx-dialogdetailfile',
  templateUrl: './dialogdetailfile.component.html',
  styleUrls: ['./dialogdetailfile.component.scss'],
})
export class DialogdetailfileComponent implements OnInit {
  detailfile: any;
  reason: any;
  check = false;

  constructor(public dialogRef: MatDialogRef<DialogdetailfileComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public detailfileService: DetailfileService,
              private dataService: DataService, private router: Router, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
  }

  close() {
    this.dialogRef.close();
  }

  changeRefuse(a: any) {
    console.log(a);
    this.reason =a;
    this.detailfileService.changeRefuse(this.dataService.getidJobRegis(), a).subscribe(rf => {
      this.detailfile = rf;
      this.check =true;
      if (this.detailfile.rf === 'success') {
        alert('Đã từ chối ứng viên ');
        this.router.navigate(['home']).then(r => console.log(r));
        this.dialogRef.close();
      }
    });
  }
}
