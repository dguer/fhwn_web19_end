import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  constructor(private http: HttpClient, private auth: AuthService,) { }
  public scoreBoard: any[] = [];
  table;

  ngOnInit() {
    this.table = document.getElementById('table');
    console.log(this.auth.Token)
    this.http.post<any>('http://localhost:3000/score', {

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
