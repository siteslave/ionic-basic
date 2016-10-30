import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AlertPage } from '../alert/alert'
import { DateTimePage } from '../date-time/date-time'
import { ListPage } from '../list/list'
import { InputSelectPage } from '../input-select/input-select'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  goAlertPage() {
    this.navCtrl.push(AlertPage);
  }

  goDateTime() {
    this.navCtrl.push(DateTimePage);
  }

  goList() {
    this.navCtrl.push(ListPage)
  }

  goInputSelect() {
    this.navCtrl.push(InputSelectPage)
  }

}
