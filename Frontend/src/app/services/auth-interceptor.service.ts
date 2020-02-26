import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { AuthenticationserviceService } from './authenticationservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authenticationService:AuthenticationserviceService) { }

  intercept(req:HttpRequest<any>,next:HttpHandler){
    // console.log(this.authenticationService.Token);
    if(req.url.endsWith('s') || (req.url.endsWith('ss'))){
      return next.handle(req);
    }
    const authReq = req.clone(
      { 
        setHeaders: { 
          Authorization: this.authenticationService.Token 
        } 
      });
    return next.handle(authReq);
  }
}
