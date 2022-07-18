import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { ProfileComponent } from './profile/profile.component';
import { ManagerJeComponent } from './managerJe/managerJe.component';
import { SharedModule } from 'primeng/api';
import { PrimengModule } from '../../shared/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';
import {JobListComponent} from './job/job-list/job-list.component';
import {FilerecruitComponent} from './filerecruit/filerecruit.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import {EditJeComponent} from './managerJe/editJe/editJe.component';
import {ResJeService} from './managerJe/resJe/resJe.service';
import {ResJeComponent} from './managerJe/resJe/resJe.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {PaginatorModule} from "primeng/paginator";
import {MatDatepickerModule} from "@angular/material/datepicker";



const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [
    {
      path: 'dashboard',
      // loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      component: DashboardComponent,
    },
    {
      path: 'profile',
      component: ProfileComponent,
    },
    {
      path: 'job',
      component: JobListComponent,
    },
    {
      path: 'managerJe',
      component: ManagerJeComponent,
    },
    {
      path: 'jobregister',
      component: FilerecruitComponent,
    },
    // {
    //   path: 'job/insert',
    //   component: JobInsertComponent,
    // },
    // {
    //   path: 'job/detail/:id',
    //   component: JobDetailComponent,
    // },
  ],
}];

@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    JobListComponent,
    ManagerJeComponent,
    FilerecruitComponent,
    EditJeComponent,
    ResJeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ThemeModule,
    NbMenuModule,
    ReactiveFormsModule,
    PrimengModule,
    SharedModule,
    MatPaginatorModule,
    MatDialogModule,
    PaginatorModule,
    MatDatepickerModule,

  ],
})
export class HomeModule { }
