import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-modal-page',
  templateUrl: 'modal-page.html'
})
export class ModalPage {
  name: string;

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams
  ) {
    this.name = this.navParams.get('name')
   }

  ionViewDidLoad() {
    console.log('Hello ModalPage Page');
  }

  closeModal() {
    let newName = 'Bill Gate';

    this.viewCtrl.dismiss(newName);
  }  
}
