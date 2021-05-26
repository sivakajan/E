import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BackServiceServiceService } from './back-service-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private backed:BackServiceServiceService,private route:Router){}
  canActivate():boolean{
    if(this.backed.logein()){
      return true
    }
    else
    {
      this.route.navigate(['log'])
      return false
    }
  }
}
