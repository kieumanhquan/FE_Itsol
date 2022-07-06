import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from './@core/guards/auth.guard';
import {PublicModule} from './modules/Public/public.module';

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
  { path: '**',
    redirectTo: 'public',
  },
  {
    path: 'public',
    loadChildren: () => import('./modules/public/public.module').then(m => PublicModule),
  },
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: '**',
    redirectTo: 'home',
  },
  {
    path: 'signup',
    loadChildren: () => import('./modules/regis/regis.module').then(m => m.RegisModule),
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
