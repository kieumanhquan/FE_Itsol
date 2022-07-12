import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthGuard} from './@core/guards/auth.guard';
import {PublicModule} from './modules/Public/public.module';
import {JobListComponent} from './modules/home/job-list/job-list.component';

import {RouteGuardService} from './@core/services/route.guard.service';


// @ts-ignore
// @ts-ignore
// @ts-ignore
export const routes: Routes = [
  {
    path: 'home',
    canActivate: [AuthGuard ,RouteGuardService],
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
  },
  // { path: '**',
  //   redirectTo: 'public',
  // },
  {
    path: 'public',
    // canActivate: [AuthGuard ],
    loadChildren: () => import('./modules/public/public.module').then(m => m.PublicModule),
  },
  {
    path: 'signup',
    loadChildren: () => import('./modules/regis/regis.module').then(m => m.RegisModule),
  },
  {
    path: 'public/active_account/:id',
    loadChildren: () => import('./modules/active/active.module').then(m => m.ActiveModule),
  },
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  // { path: '**',
  //   redirectTo: 'auth',
  // },
  {
    path: 'signup',
    loadChildren: () => import('./modules/regis/regis.module').then(m => m.RegisModule),
  },

  {path: 'job', component: JobListComponent},
  {path: '', redirectTo: 'jobs', pathMatch: 'full'},

  {
    path:'change-password',
    // eslint-disable-next-line max-len
    loadChildren: () => import('./modules/auth/forgot-password/change-password/change-password.module').then(m => m.ChangePasswordModule),
  },
  {

    path: 'public/itsol_recruitment',
    loadChildren: () => import('./modules/web-home/web-home.module').then(m => m.WebhomeModule),
  },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
