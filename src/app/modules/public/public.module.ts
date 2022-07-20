  import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { SharedModule } from 'primeng/api';
import { PrimengModule } from '../../shared/primeng.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PublicComponent} from './public.component';
import { JobregistrationComponent } from './jobregistration/jobregistration.component';
  import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [{
  path: '',
  component: PublicComponent,
  children: [
    {
      path: 'home',
      // loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
      path : 'jobregistration',
      component : JobregistrationComponent,
    },
    {
      path : 'profile',
      component : ProfileComponent,
    },

  ],
}];

@NgModule({
  declarations: [
    PublicComponent,
    JobregistrationComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ThemeModule,
        NbMenuModule,
        ReactiveFormsModule,
        PrimengModule,
        SharedModule,
        FormsModule,
    ],
})
export class PublicModule { }
