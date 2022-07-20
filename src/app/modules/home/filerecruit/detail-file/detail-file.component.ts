import {Component, OnInit} from '@angular/core';
import {DetailfileService} from '../../../../@core/services/detailfile.service';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {DataService} from '../../../../@core/services/dataservice.service';
import {MatDialog} from '@angular/material/dialog';
import {DialogdetailfileComponent} from './dialogdetailfile/dialogdetailfile.component';

@Component({
  selector: 'ngx-detail-file',
  templateUrl: './detail-file.component.html',
  styleUrls: ['./detail-file.component.scss'],
})

export class DetailFileComponent implements OnInit {
  detailfile: any;
  check = false;
  // @ts-ignore
  reason = 'agdsf';
  // @ts-ignore
  check = false;
  regisId = this.dataService.getidJobRegis();
  status = this.dataService.getStatus();

  constructor(public detailfileService: DetailfileService, private fb: FormBuilder, private router: Router,
              public dataService: DataService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getDetailFile();
    this.itemToForm;
    console.log(this.status);
  }

  itemToForm = () => {
    if (this.detailfile === undefined) {
      return;
    }

    // The rest of the code
  };

  getDetailFile() {
    this.detailfileService.getDetailFile(this.dataService.getidJobRegis()).subscribe(dat => {
      this.detailfile = dat;
      console.log(this.status);
    });
  }

  changeBrowser() {
    this.detailfileService.changeBrowse(this.dataService.getidJobRegis()).subscribe(br => {
      this.detailfile = br;
      this.check=true;
      if (this.detailfile.br === 'success') {
        alert('xét duyệt thành công');
        this.router.navigate(['home']).then(r => console.log(r));
      } else {
        alert('Xét duyệt thất bại');
      }
      console.log(br);
    });
  }

  changeSuccess() {
    this.detailfileService.changeSuccess(this.dataService.getidJobRegis()).subscribe(sc => {
      this.detailfile = sc;
      this.check=true;
      if (this.detailfile.sc === 'success') {
        alert('Tuyển thành công');
        this.router.navigate(['home']).then(r => console.log(r));
      }
      console.log(sc);
    });
  }

  showReason(regisId) {
    alert(this.detailfile.reason);
  }

  bookInter(regisId) {
    this.router.navigate(['home/regdetail']);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogdetailfileComponent, {
      width:'50%',
      height:'50%'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}





