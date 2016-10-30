import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ListPage } from '../list/list'
import { InputSelectPage } from '../input-select/input-select'

@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html'
})
export class TabPage {

  tab1: any;
  tab2: any;
  
  constructor(public navCtrl: NavController) {
    this.tab1 = ListPage;
    this.tab2 = InputSelectPage;
  }

  ionViewDidLoad() {
    console.log('Hello Tab Page');
  }

}
