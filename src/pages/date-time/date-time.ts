import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-date-time',
  templateUrl: 'date-time.html'
})
export class DateTimePage {
  startDate: any
  startTime: any
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello DateTime Page');
  }

  showDate() {
    console.log(this.startDate)
    console.log(this.startTime)
  }

}
