import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserModule} from '@angular/platform-browser';
import {DetailFileComponent} from './detail-file.component';
@NgModule({
  declarations: [
    DetailFileComponent,
  ],
  imports: [
    MatSelectModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    CommonModule,
    BrowserModule,
  ],
})
export class DetailFileModule { }
