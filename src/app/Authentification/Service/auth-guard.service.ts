import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthentificationService}  from './authentification.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private authenticationService: AuthentificationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;
    console.log(currentUser)
    if (currentUser) {
      
      console.log("ah")
        // logged in so return true
        return true;
    }
    console.log("non")

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'] );
    return false;
}
}
