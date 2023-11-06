import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService,private router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(!request.url.includes('/auth/login')){
      let newRequest = request.clone(
        {
          headers: request.headers.set('Authorization', 'Bearer '+this.authService.accessToken)
        }
      );
      return next.handle(newRequest).pipe(
        catchError((err)=>{ 
          if(err.status==401){
            this.authService.logout();

          }
         return throwError(err.message)
        }
      ));
    }else{
      return next.handle(request);
    }
    
  }
}
