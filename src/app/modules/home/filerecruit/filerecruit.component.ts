import {Component, OnInit} from '@angular/core';
import {Filerecruit} from './filerecruit';
import {FileRecruitService} from '../../../@core/services/file-recruit.service';

// @ts-ignore
@Component({
  selector: 'ngx-filerecruit',
  templateUrl: './filerecruit.component.html',
  styleUrls: ['./filerecruit.component.scss'],
})
export class FilerecruitComponent implements OnInit {
  // @ts-ignore
  filerecruit: Filerecruit[];

  constructor(private filerecruitService: FileRecruitService) {
  }

  ngOnInit(): void {
    // this.filerecruit = [{
    //   name: 'Lộc',
    //   jobPosition: 'javadev',
    //   dateRegister: 'Jun 15, 2022',
    //   cv: 'filecv',
    //   status: 'Ứng viên bị từ chối',
    //   reason: 'thiếu kinh nghiệm',
    // }];
    this.getFilerecruit();
  }


  private getFilerecruit() {
    this.filerecruitService.getFileRecruit().subscribe(data => {
      console.log(data);
      this.filerecruit = data;
    });
  }


}
