import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {FilerecruitComponent} from './filerecruit.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {DetailFileComponent} from './detailfile/detail-file/detail-file.component';
import {CommonModule} from '@angular/common';
import { DialogdetailfileComponent } from './detailfile/detail-file/dialogdetailfile/dialogdetailfile/dialogdetailfile.component';
import {BrowserModule} from '@angular/platform-browser';

const routes: Routes = [{
  path: '',
  component: FilerecruitComponent,
  children: [
    {},

  ],
},
  {
    path: 'detailfile',
    component: DetailFileComponent,
  },
];

@NgModule({
  declarations: [
    DetailFileComponent,
    DialogdetailfileComponent,

  ],
  imports: [
    MatSelectModule,
    RouterModule.forChild(routes),
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    CommonModule,
    BrowserModule,
  ],
})
export class FilerecruitModule {
}
