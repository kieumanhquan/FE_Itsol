import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {EditCompanyComponent} from './edit-company.component';

const routes: Routes = [{
  path: '',
  component: EditCompanyComponent,
  children: [],
}];

@NgModule({
  declarations: [
    EditCompanyComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
  ],
})
export class CompanyModule { }
