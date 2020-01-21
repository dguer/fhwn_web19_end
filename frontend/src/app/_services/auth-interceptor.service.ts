import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {

  constructor(private auth:AuthService) { }

  intercept(req:HttpRequest<any>,next:HttpHandler){
    console.log(this.auth.Token);
    if(req.url.endsWith('s') || (req.url.endsWith('ss'))){
      return next.handle(req);
    }
    const authReq = req.clone(
      { 
        setHeaders: { 
          Authorization: this.auth.Token 
        } 
      });
    return next.handle(authReq);
  }
}
