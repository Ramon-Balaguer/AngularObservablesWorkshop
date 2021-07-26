import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable, Subject } from 'rxjs';
import { Alert } from './alert';

@Injectable({
  providedIn: 'root'
})

export class AlertService{
  //private subject = new BehaviorSubject<Alert>({message: "1000"});
  private subject = new Subject<Alert>();

  constructor() { }

  public getAlert() : Observable<Alert> {
    return this.subject.asObservable();
  }

  public sendAlert(alert : Alert) : void {
    this.subject.next(alert);
  }
}
