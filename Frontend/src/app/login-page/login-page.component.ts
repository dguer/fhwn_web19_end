import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationserviceService } from '../services/authenticationservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IpService } from '../services/ip.service';
import { Router } from '@angular/router';

import { DataService } from "../services/data.service";


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  testFormGroup: FormGroup;
  isUserValid = Boolean(true);
  message: string;

  constructor(private http: HttpClient, private authenticationservice: AuthenticationserviceService, private ip: IpService, private router: Router, private data: DataService) { }

  ngOnInit() {
    this.authenticationservice.Token = "";
    this.data.currentMessage.subscribe(message => this.message = message);
    this.testFormGroup = new FormGroup({
      'user': new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.pattern("^[A-Z]+.*")
      ]),
      'password': new FormControl(null, [
        Validators.required,
        Validators.minLength(3)
      ])
    });
  }

  get password() { return this.testFormGroup.get('password'); }
  get username() { return this.testFormGroup.get('user'); }

  get usernameValue() { return this.testFormGroup.get('user').value; }
  get passwordValue() { return this.testFormGroup.get('password').value; }

  login(): void {
    this.http.post<any>('http://' + this.ip.IP + ':3000/signin', {
      username: this.usernameValue,
      password: this.passwordValue
    }).subscribe(
      x => {

        if (x.Token == false) {
          alert("Wrong username or password")

        }

        else {
          this.authenticationservice.Token = x.Token;

          this.data.changeMessage(this.usernameValue)

          this.router.navigate(['game']);
        }

      },
      error => { console.error(error); });
  }


  inputUserFocusOut() {
    if (!this.testFormGroup.get('user').valid) {
      this.isUserValid = false;
      return;
    }

    this.isUserValid = true;
  }


  logout() {
    this.authenticationservice.Token = '';
  }

}














