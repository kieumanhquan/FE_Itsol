import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {RouterModule, Routes} from '@angular/router';
import {NbMenuModule} from '@nebular/theme';
import {ThemeModule} from '../../@theme/theme.module';
import {ProfileComponent} from './profile/profile.component';
import {ManagerJeComponent} from './managerJe/managerJe.component';
import {SharedModule} from 'primeng/api';
import {PrimengModule} from '../../shared/primeng.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JobListComponent} from './job-list/job-list.component';
import {FilerecruitComponent} from './filerecruit/filerecruit.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {JobregisterDetailComponent} from './filerecruit/jobregister-detail/jobregister-detail.component';
import {DetailFileComponent} from "./filerecruit/detailfile/detail-file/detail-file.component";
import {CommonModule} from "@angular/common";

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [
    {
      path: 'dashboard',
      // loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
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
      path: 'regdetail',
      component: JobregisterDetailComponent,
    },
    {
      path: 'detailfile',
      component: DetailFileComponent,
    },
    {
      path: 'jobregister',
      component: FilerecruitComponent,
    },
  ],
}];

@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    JobListComponent,
    ManagerJeComponent,
    FilerecruitComponent,
    JobregisterDetailComponent,
  ],
  imports: [
    MatSelectModule,
    RouterModule.forChild(routes),
    ThemeModule,
    NbMenuModule,
    ReactiveFormsModule,
    PrimengModule,
    SharedModule,
    MatPaginatorModule,
    FormsModule,
    CommonModule,
  ],
})
export class HomeModule {
}
