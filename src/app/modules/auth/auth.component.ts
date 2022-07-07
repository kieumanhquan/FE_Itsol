import {Component, Injectable, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../@core/services/auth.service';
import { TokenService } from '../../@core/services/token.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'ngx-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
hide: boolean;
  formLogin: FormGroup;
  isSubmitted = false;
  roles: string[] = [];
  isLoggedIn = false;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.initForm();
    if (this.tokenService.getToken()) {
      this.isLoggedIn = true;
      // this.roles = this.tokenService.getUser().roles;
    }

  }

  initForm() {
    this.formLogin = this.fb.group({
      userName: ['', Validators.required],
      // eslint-disable-next-line max-len
      password: ['', [Validators.required , Validators.minLength(6) , Validators.maxLength(8)]],
    });
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get f() {
    return this.formLogin.controls;
  }


  onSubmit() {
    if(!this.formLogin.valid){
      this.hide=false;
      console.log(this.hide);
    }
    this.isSubmitted = true;
    if (this.formLogin.valid) {
      this.authService.login(this.formLogin.value).subscribe(
        data => {
          console.log(data);
          this.isLoggedIn = true;
          // save token sisson
          this.tokenService.saveToken(data.token);
          this.tokenService.saveUser(jwt_decode(data.token));
          // save user localstorage
          const user = JSON.stringify(jwt_decode(data.token));
          localStorage.setItem('user', user);
          // router
          if(localStorage.getItem('user')!=null){
            const userinfo = JSON.parse(localStorage.getItem('user'));
            // lấy ra auth để router
            const role = userinfo.auth;
            console.log(role);
            if(role === 'ROLE_ADMIN' ){
              console.log('aaa');
              this.router.navigate(['/home']);
            } else if(role === 'ROLE_USER'){
              this.router.navigate(['/public']);
            }
          }
        },
      );
    }
  }
}
