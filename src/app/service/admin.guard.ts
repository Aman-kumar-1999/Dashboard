import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from '../pages/login/login.component';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate /*, CanActivateChild*/{

  constructor(private login: LoginService, private router: Router) { }
  // canActivateChild(
  //   childRoute: ActivatedRouteSnapshot, 
  //   state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
  //     if (this.login.isLoggedIn() && this.login.getUserRole() == 'Admin') {
  //       return true;
  //     }
  
  //     this.router.navigate(['login']);
  
  //     return false;
  // }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.login.isLoggedIn() && this.login.getUserRole() == 'Admin') {
      return true;
    }

    this.router.navigate(['login']);

    return false;
  }

}
