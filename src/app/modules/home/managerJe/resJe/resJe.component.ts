import {Component, OnInit} from '@angular/core';
import {User} from './resJe.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ResJeService} from './resJe.service';
import {MatDialogRef} from "@angular/material/dialog";
import {Toaster} from "ngx-toast-notifications";

@Component({
  selector: 'ngx-managerJe',
  templateUrl: './resJe.component.html',
  styleUrls: ['./resJs.component.scss'],
}) export class ResJeComponent implements OnInit{
  roles: string[] = [];
  // eslint-disable-next-line @typescript-eslint/naming-convention
  FormRegis: FormGroup;

  constructor(private fb: FormBuilder,
              private resJeService: ResJeService,
              private dialogRef: MatDialogRef<ResJeComponent>,
              private toaster: Toaster,) {
  }
  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.FormRegis = this.fb.group({
      email: new FormControl('',[ Validators.required, Validators.email]),
      gender: new FormControl('',[ Validators.required]),
      homeTown: new FormControl('',[ Validators.required]),
      name: new FormControl('',[ Validators.required, Validators.minLength(5),Validators.maxLength(20)]),
      password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,16}$')]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$')]),
      userName: new FormControl('',[ Validators.required, Validators.minLength(5),Validators.maxLength(20)]),
      birthDay: new FormControl('',[ Validators.required]),
    });
  }

  get f() {
    return this.FormRegis.controls;
  }

  onSubmit() {
    const userJe = {
      name: this.FormRegis.value.name,
      username: this.FormRegis.value.username,
      email: this.FormRegis.value.email,
      phoneNumber: this.FormRegis.value.phoneNumber,
      homeTown: this.FormRegis.value.homeTown,
      gender: this.FormRegis.value.gender,
      password: this.FormRegis.value.password,
      birthDay: this.FormRegis.value.birthDay,
    };
    this.resJeService.resJe(userJe).subscribe();
    this.showToater('thành công', 'success');
    this.dialogRef.close();
  }
   close() {
     this.dialogRef.close();
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
}
