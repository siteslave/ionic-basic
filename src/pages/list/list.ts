import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  phones: Array<any>
  phones2: Array<any>

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
    this.phones = ['iPhone 6', 'Galaxy S7', 'Galaxy Note 7', 'Zenfone 3']
    this.phones2 = [
      { name: 'iPhone 6', company: 'Apple' },
      { name: 'Galaxy S7', company: 'Samsung' },
      { name: 'Galaxy Note 7', company: 'Samsung' },
      { name: 'Zenfone 3', company: 'Asus' }
    ]
  }

  ionViewDidLoad() {
    console.log('Hello List Page');
  }

  showMe(name) {
    let alert = this.alertCtrl.create({
      title: 'My Phone!',
      subTitle: 'มือถือของฉันคือ ' + name,
      buttons: ['OK']
    });
    alert.present();
  }
}
