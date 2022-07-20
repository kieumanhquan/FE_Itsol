import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {DataService} from '../../../@core/services/dataservice.service';
import {JobRegistrationService} from '../../../@core/services/job-registration.service';
import {SessionService} from '../../../@core/services/session.service';
import {ProfileService} from '../../home/profile/profile.service';

@Component({
  selector: 'ngx-jobregistration',
  templateUrl: './jobregistration.component.html',
  styleUrls: ['./jobregistration.component.scss'],
})
export class JobregistrationComponent implements OnInit {
  date = new Date();
  // eslint-disable-next-line @typescript-eslint/naming-convention
  JobRegistration: FormGroup;
  file: File;
  private userName: any;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  setdata: any;

  constructor(private jobRegistrationService: JobRegistrationService, private fb: FormBuilder, private router: Router,
              public dataService: DataService, private sessionService: SessionService, private p: ProfileService) {
  }

  ngOnInit(): void {
    this.getUsername();
  }


  getUsername() {
    const userinfo = JSON.parse(localStorage.getItem('user'));
    this.userName = userinfo.sub;
  }

  fileselect(event: any) {
    this.file = event.target.files[0];
  }

  regisJob(f: any) {
    this.jobRegistrationService.regisJob(this.file, this.userName).subscribe(response => {
      this.setdata = response;
      this.setdata = response;
      this.router.navigate(['public']);
    });
    alert('Đăng kí việc làm thành công');
  }
}
