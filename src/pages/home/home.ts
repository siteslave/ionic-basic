import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AlertPage } from '../alert/alert'
import { DateTimePage } from '../date-time/date-time'
import { ListPage } from '../list/list'
import { InputSelectPage } from '../input-select/input-select'
import { LoadingPage } from '../loading/loading'
import { MainModalPage } from '../main-modal/main-modal'
import { TabPage } from '../tab/tab'

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

  goLoading() {
    this.navCtrl.push(LoadingPage)
  }

  goModal() {
    this.navCtrl.push(MainModalPage)
  }

  goTab() {
    this.navCtrl.push(TabPage)
  }
}
