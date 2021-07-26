import { Component, OnInit } from '@angular/core';
import { AlertService} from './alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private alertService: AlertService ) {}

  ngOnInit(): void {
    //setTimeout(() => this.alertService.sendAlert({message: "2000"}), 1000);
    this.alertService.sendAlert({message: "2000"});
  }

  sendAlert() {
    this.alertService.sendAlert({message: "3000"});
  }
}
