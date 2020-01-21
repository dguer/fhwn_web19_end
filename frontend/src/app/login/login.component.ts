import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  FormGroup: FormGroup;
  isUserValid = Boolean(true);

  constructor(private http: HttpClient, private authenticationservice: AuthService,private router:Router) { }

  ngOnInit() {
    this.FormGroup = new FormGroup({
      'user': new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern("[A-Za-z0-9]+.*")
      ]),
      'password': new FormControl(null, [
        Validators.required,
        Validators.minLength(4)
      ])
    });
  }
  get username() { return this.FormGroup.get('user'); }
  get password() { return this.FormGroup.get('password'); }

  get usernameValue(){ return this.FormGroup.get('user').value; }
  get passwordValue() { return this.FormGroup.get('password').value; }

  login(): void {
    this.http.post<any>('http://localhost:3000/signin', {
      username: this.usernameValue,
      password: this.passwordValue
    }).subscribe(
      x => {
        console.log(x);
        this.authservice.Token = x.Token;
        this.router.navigate(['game']);
      },
      error => { console.error(error); });
    }
      userCheck() {
        if (!this.FormGroup.get('user').valid) {
          this.isUserValid = false;
          return;
        }
        this.isUserValid = true;
      }
      logout() {
        this.authservice.Token = '';
      }
}
