import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthentificationService}  from './authentification.service'

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService {


  constructor(private authenticationService: AuthentificationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      // add auth header with jwt if user is logged in and request is to api url
      const currentUser = this.authenticationService.currentUserValue;
 
      const isLoggedIn = currentUser && currentUser.id_token;
      const isApiUrl = request.url.startsWith('http://178.170.94.109:8084/api/authenticate');
      if (isLoggedIn ) {
        
        console.log('ayman')
          request = request.clone({
              setHeaders: {
                  Authorization: `Bearer ${currentUser.id_token}`
              }
          });
          console.log(request)
      }
        
      return next.handle(request);
  }

  
}
