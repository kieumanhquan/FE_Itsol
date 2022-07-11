import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, Routes} from '@angular/router';
import {TokenService} from './token.service';
import jwt_decode from 'jwt-decode';

@Injectable()
export class RouteGuardService implements CanActivate {
  constructor(private token: TokenService, private route: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const tokenIf = JSON.parse(localStorage.getItem('user'));
    const routes = tokenIf.auth;
    if (routes === 'ROLE_ADMIN' || routes === 'ROLE_JE') {
      console.log(routes);
      return true;
    } else {
      this.route.navigate(['/public']);
      return false;
    }
    return undefined;
  }

}
