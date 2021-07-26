import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Alert } from '../alert';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit,OnDestroy {

  private subscriptions: Subscription = new Subscription;

  constructor(private alertService: AlertService ) {
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  ngOnInit(): void {
    this.subscriptions.add(this.alertService.getAlert().subscribe(
      (alert: Alert) => {
        console.log(`First child ${alert.message}`);
      }
    ));
  }
}
