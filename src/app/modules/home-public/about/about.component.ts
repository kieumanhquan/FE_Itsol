import { Component, OnInit } from '@angular/core';
import {AboutService} from '../../../@core/services/about.service';
import {Company} from '../../../@core/models/company';

@Component({
  selector: 'ngx-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private aboutService: AboutService) { }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  company: Company;
  ngOnInit(): void {
    this.aboutService.getCompany().subscribe(data => {
      console.log(this.company);
      this.company = data;
      console.log(this.company);
    });
  }

}
