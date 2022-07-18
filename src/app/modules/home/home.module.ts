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

import {FilerecruitComponent} from './filerecruit/filerecruit.component';
import {MatDialog} from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import {JobListComponent} from './job/job-list/job-list.component';
// import {JobInsertComponent} from './job/job-insert/job-insert.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
// import {JobDetailComponent} from './job/job-detail/job-detail.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [
    // {
    //   path: 'dashboard',
    //   loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    // },
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
    {
      path: 'job/insert',
      component: JobInsertComponent,
    },
    // {
    //   path: 'job/detail/:id',
    //   component: JobDetailComponent,
    // },
  ],
}];

@NgModule({
  declarations: [
    HomeComponent,
    // ProfileComponent,
    ManagerJeComponent,
    FilerecruitComponent,
    // JobListComponent,
  ],
  imports: [
    MatAutocompleteModule,
    CommonModule,
    RouterModule.forChild(routes),
    ThemeModule,
    NbMenuModule,
    ReactiveFormsModule,
    PrimengModule,
    SharedModule,
    MatPaginatorModule,
    MatDialogModule,
  ],
})
export class HomeModule { }
