import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';


@Injectable()
export class AuthguardGuard implements CanActivate {
  constructor(private user: UserService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const isLoggedIn = this.user.getUserLoggedIn();
    console.log('canActivate: ', isLoggedIn);
    return isLoggedIn;
  }
}
