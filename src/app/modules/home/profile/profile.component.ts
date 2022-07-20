import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { SessionService } from '../../../@core/services/session.service';
import { User } from './profile.model';
import { ProfileService } from './profile.service';
import {Toaster} from 'ngx-toast-notifications';

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  [x: string]: any;
  formProfile: FormGroup;
  user: User;
  username: string;
  id: number;
  res: any;
  currentDate= new Date();
  birthday: string;
  constructor(
    private sessionService: SessionService,
    private profileService: ProfileService,
    private fb: FormBuilder,
    private primengConfig: PrimeNGConfig,
    private toaster: Toaster) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.getByUserName();
    this.initForm();

  }
  initForm(){
    this.formProfile = this.fb.group({
      fullName: new FormControl('',[ Validators.required, Validators.minLength(5),Validators.maxLength(20)]),
      email:  new FormControl('',[ Validators.required, Validators.email]) ,
      // eslint-disable-next-line max-len
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$')]),
      birthDay:new FormControl('',[ Validators.required]) ,
      homeTown: new FormControl('',[ Validators.required]) ,
      gender: new FormControl('',[ Validators.required]) ,
    });
  }

  getByUserName(){
    this.username=this.sessionService.getItem('auth-user');
    console.log(this.username.sub);
    this.profileService.getProfile(this.username.sub).subscribe(
      (res)=>{
        console.log(res.id);
        this.updateForm(res);
        this.res = res;
        this.id = res.id;
      },
    );
  }

  updateUser() {
    const user = {
      userName: this.formProfile.value.fullName,
      email: this.formProfile.value.email,
      phoneNumber: this.formProfile.value.phoneNumber,
      birthDay: this.formProfile.value.birthDay,
      homeTown: this.formProfile.value.homeTown,
      gender: this.formProfile.value.gender,
    };
    this.profileService.updateUser(this.id, user).subscribe();
    this.showToater('thành công', 'success');
  }



  updateForm(user: User): void {
    this.formProfile.patchValue({
      fullName:user.userName,
      email:user.email,
      phoneNumber:user.phoneNumber,
      birthDay:user.birthDay,
      homeTown:user.homeTown,
      gender: user.gender,
    });
  }

  showToater(message: string, typea: any){
    const type = typea;
    this.toaster.open({
      text:message,
      caption: 'thành công',
      type,
      duration:3000,
    });
  }
  changeGender(event: any){
    const a = document.querySelector('.select');
    console.log(this.formProfile.value.gender);
  }
}
