import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor(private http:HttpClient) { }

  sendScore(name,score){
    console.log('Sending score..');
    this.http.post<any>('http://localhost:3000/score',{
      name:name,
      score:score
    }).subscribe(
      x =>{
        console.log('.. score sended.');
      },
      error =>{
        console.log(error);        
      }     
    );
  }

}
