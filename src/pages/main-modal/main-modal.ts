import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ModalPage } from '../modal-page/modal-page'

@Component({
  selector: 'page-main-modal',
  templateUrl: 'main-modal.html'
})
export class MainModalPage {

  constructor(public navCtrl: NavController, private modalCtrl: ModalController) {}

  ionViewDidLoad() {
    console.log('Hello MainModal Page');
  }

  showModal() {
    let modal = this.modalCtrl.create(ModalPage, { name: 'Satit Rianpit' });
    modal.present();

    modal.onDidDismiss(newName => {
      console.log(newName)
    })
  }

}
