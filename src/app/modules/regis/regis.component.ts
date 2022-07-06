import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisService } from '../../@core/services/regis.service';
import { TokenService } from '../../@core/services/token.service';
<<<<<<< HEAD
import {User} from '../../@core/models/user';
=======
import {User} from "../../@core/models/user";
>>>>>>> 417d7ae3087857c53131115fda16f81491d9993a

@Component({
  selector: 'ngx-regis',
  templateUrl: './regis.component.html',
  styleUrls: ['./regis.component.scss']
  styleUrls: ['./regis.component.scss'],
})
export class RegisComponent implements OnInit {
  user: User;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  FormRegis: FormGroup;
  isSubmitted = false;
  roles: string[] = [];
  isLoggedIn = false;

  constructor(private fb: FormBuilder,
              private regisService: RegisService,
              private tokenService: TokenService,
              private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.initForm();
    if (this.tokenService.getToken()) {
      this.isLoggedIn = true;
      // this.roles = this.tokenService.getUser().roles;
    }

  }

  initForm() {
    this.FormRegis = this.fb.group({
      fullname: ['', Validators.required],
      email: ['', Validators.required],
      phonenum: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.FormRegis.controls;
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get f() {
    return this.FormRegis.controls;
  }


  onSubmit() {
    this.isSubmitted = true;
    this.user = new User(
      this.FormRegis.value.fullname,
      this.FormRegis.value.email,
      this.FormRegis.value.phonenum,
      this.FormRegis.value.username,
      this.FormRegis.value.password,
    );
    if (this.FormRegis.valid) {
      this.regisService.regis(this.user)
        .then (data => {
            console.log(data);
            alert("đăng kí tài khoản thành công, mời vào email để active tài khoản");
            this.router.navigate(['/home/']);
          },
          error => console.log(error));
    }
  }
}
