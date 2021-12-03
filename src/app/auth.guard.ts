import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router) {
 
  }
 
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean|UrlTree {
              

      if (!localStorage.getItem('user')) {
          alert('You are not allowed to view this page. You are redirected to login Page');
          
          this.router.navigate(["login"]);
          return false;

          //var urlTree = this.router.createUrlTree(['login']);
          //return urlTree;
      } 

      return true;
  }
  
}
