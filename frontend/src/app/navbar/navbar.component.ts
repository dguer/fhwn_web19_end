import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private auth:AuthService) { }

  public IsloggedIn():boolean{
    if (this.auth.Token.length > 0){
      return true;
    }
    return false;
  }
  ngOnInit() {
  }

}
