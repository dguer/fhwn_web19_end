import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationserviceService } from '../services/authenticationservice.service';
import { IpService } from '../services/ip.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})

export class ScoreboardComponent implements OnInit {

  constructor(private http: HttpClient, private authService: AuthenticationserviceService,private ip:IpService) { }
  public scoreBoard: any[] = [];
  table;
  message:string;

  ngOnInit() {
    
    this.table = document.getElementById('table');
    console.log(this.authService.Token)
    this.http.post<any>('http://' + this.ip.IP + ':3000/scoreboard', {

    }
    ).subscribe(
      x => {
        this.scoreBoard = x;
      },
      error => {
        console.log(error);
    });
  }
}
