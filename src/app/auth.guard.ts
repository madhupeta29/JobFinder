import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JobService } from './service/job.service';
import { RegisterService } from './services/register.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router, private j: JobService) {
 
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
