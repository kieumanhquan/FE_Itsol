import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {DetailJobregisService} from '../../../../@core/services/detail-jobregis.service';
import {DataService} from '../../../../@core/services/dataservice.service';
import {JobregisterService} from '../../../../@core/services/jobregister.service';

@Component({
  selector: 'ngx-jobregister-detail',
  templateUrl: './jobregister-detail.component.html',
  styleUrls: ['./jobregister-detail.component.scss'],
})
export class JobregisterDetailComponent implements OnInit {
  method: string;
  mediat:string;
  selection = ['offline', 'online'];
  check = false;
  formJobRegis: FormGroup;
  status: any;

  constructor(private jobregisterService: JobregisterService, private detailJobregisService: DetailJobregisService, private fb: FormBuilder, private router: Router,
              public dataService: DataService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formJobRegis = this.fb.group({
      dateInterview: ['', Validators.required],
      methodInterview: ['', Validators.required],
      mediaType: ['', Validators.required],
      timeInterview: ['', Validators.required],
    });
  }

  sendMail() {
    const jobRegis = {
      dateInterview: this.formJobRegis.value.dateInterview,
      mediaType:this.mediat,
      timeInterview: this.formJobRegis.value.timeInterview,
    };
    console.log(this.dataService.getidJobRegis());
    this.detailJobregisService.sendMail(this.dataService.getidJobRegis(), jobRegis).subscribe(
      reponse => {
        this.status = reponse;
        console.log(this.status);
        if (this.status.response === 'success') {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          this.jobregisterService.updateJobRegisdetail(this.dataService.getidJobRegis()).subscribe();
          alert('hẹn phỏng vấn thành công');
          this.router.navigate(['home']).then(r => console.log(r));
        }
      },
    );
  }

  showDetail(event: any) {
    if (event.target.value === 'online') {
      this.method = event.target.value;
      this.check = true;
    }
    if (event.target.value === 'offline') {
      this.method = event.target.value;
      this.check = false;
    }
    console.log(event.target.value);
  }
  showMedia(event: any) {
    if (event.target.value === 'facebook') {
      this.mediat = event.target.value;
    }
    if (event.target.value === 'skype') {
      this.mediat = event.target.value;
    }
    if (event.target.value === 'googlemeet') {
      this.mediat = event.target.value;
    }
    if (event.target.value === 'zalo') {
      this.mediat = event.target.value;
    }
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  media =['facebook','skype', 'googlemeet','zalo'];
}
