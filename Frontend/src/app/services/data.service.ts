import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';
@Injectable()
export class DataService {

  private messageSource =new Subject<string>();
  currentMessage = this.messageSource.asObservable();
 text: string;
  constructor() { }

  changeMessage(message: string) {


    this.currentMessage.subscribe(message => this.text = message)
    
    this.messageSource.next(message)

  }

}