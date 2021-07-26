import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Alert } from '../alert';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit,OnDestroy {

  private subscriptions: Subscription = new Subscription;

  constructor(private alertService: AlertService ) {
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  ngOnInit(): void {
    this.subscriptions.add(this.alertService.getAlert().subscribe(
      (alert: Alert) => {
        console.log(`Second child ${alert.message}`);
      }
    ));
  }

}
