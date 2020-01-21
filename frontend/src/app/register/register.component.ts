import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  FormGroup: FormGroup;
  isUserValid = Boolean(true);

  constructor(private http: HttpClient, private authservice: AuthService) { }

  ngOnInit() {
    this.FormGroup = new FormGroup({
      'username': new FormControl(null, [
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

  get username() { return this.FormGroup.get('username'); }
  get password() { return this.FormGroup.get('password'); }

  get usernameValue(){ return this.FormGroup.get('username').value; }
  get passwordValue() { return this.FormGroup.get('password').value; }

  login(): void {
    console.log(this.password,this.username);
    this.http.post<any>('http://localhost:3000/register', {
      
      username: this.usernameValue,
      password: this.passwordValue
    }).subscribe(
      x => {
        console.log(x);
        this.authservice.Token = x.Token;
      },
      error => { console.error(error); });
  }

  onConfigure()
  {
    alert("Congrats! Now you can sign in!");
  }

  userCheck()
  {
    if (!this.FormGroup.get('user').valid) {
      this.isUserValid = false;
      return;
    }

    this.isUserValid = true;
  }
}
