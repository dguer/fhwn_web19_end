import { Component } from '@angular/core';
import { AuthenticationserviceService } from './services/authenticationservice.service';

import { DataService } from "./services/data.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataService]
})
export class AppComponent {
  title = 'Breakout Game';

  get token() {
    return this.authService.Token;
}

constructor(private authService: AuthenticationserviceService) { }
}
