import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthGuard} from './@core/guards/auth.guard';
import {PublicModule} from './modules/Public/public.module';

// @ts-ignore
// @ts-ignore
// @ts-ignore
export const routes: Routes = [
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
  },

  // {
  //   path: '**',
  //   redirectTo: 'home',
  // },

  // { path: '**',
  //   redirectTo: 'public',
  // },
  {
    path: 'public',
    loadChildren: () => import('./modules/public/public.module').then(m => m.PublicModule),
  },
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  // { path: '**',
  //   redirectTo: 'home',
  // },
  {
    path: 'signup',
    loadChildren: () => import('./modules/regis/regis.module').then(m => m.RegisModule),
  },
  {
    path:'change-password',
    // eslint-disable-next-line max-len
    loadChildren: () => import('./modules/auth/forgot-password/change-password/change-password.module').then(m => m.ChangePasswordModule),
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
