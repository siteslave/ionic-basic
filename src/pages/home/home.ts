import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AlertPage } from '../alert/alert'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  goAlertPage() {
    this.navCtrl.push(AlertPage)
  }

}
