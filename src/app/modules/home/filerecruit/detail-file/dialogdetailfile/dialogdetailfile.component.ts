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
  test : any;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  // DialogForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<DialogdetailfileComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public detailfileService: DetailfileService,
              private dataService: DataService, private router: Router, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    // this.DialogForm = this.fb.group({
    //   reason: ['', Validators.required],
    // });
  }

  close() {
    this.dialogRef.close();
  }

  changeRefuse() {
    // const reason = this.DialogForm.value.reason;
    this.detailfileService.changeRefuse(this.dataService.getidJobRegis(), this.reason).subscribe(rf => {
      this.detailfile = rf;
      if (this.detailfile.rf === 'success') {
        alert('Đã từ chối ứng viên ');
        this.router.navigate(['home']).then(r => console.log(r));
        this.dialogRef.close();
      }
    });
  }
}
