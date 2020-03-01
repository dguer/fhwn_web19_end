import { Component, OnInit } from '@angular/core';
import { AuthenticationserviceService } from '../services/authenticationservice.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IpService } from '../services/ip.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  testFormGroup: FormGroup;
  isUserValid = Boolean(true);

  constructor(private http: HttpClient, private authenticationservice: AuthenticationserviceService,private ip:IpService) { }

  ngOnInit() {
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

  get usernameValue(){ return this.testFormGroup.get('user').value; }
  get passwordValue() { return this.testFormGroup.get('password').value; }

  login(): void {
    
    this.http.post<any>('http://' + this.ip.IP + ':3000/register', {
      
      username: this.usernameValue,
      password: this.passwordValue

    }).subscribe(
      x => {
         
        console.log(x.status);
        if(x.status){
          alert("Sign up successful, please proceed to login ");
        }
        else{
          alert("User already exists");
        }
      },
      error => { console.error(error); });
  }

 

  inputUserFocusOut()
  {
    if (!this.testFormGroup.get('user').valid) {
      this.isUserValid = false;
      return;
    }

    this.isUserValid = true;
  }
}
