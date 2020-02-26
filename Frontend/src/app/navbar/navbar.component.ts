import { Component, OnInit } from '@angular/core';
import { AuthenticationserviceService } from '../services/authenticationservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private authenticationservice:AuthenticationserviceService) { }
  
  public IsloggedIn():boolean{
    if (this.authenticationservice.Token.length > 0){
      return true;
    }
    return false;
  }

  ngOnInit() {
  }

}
