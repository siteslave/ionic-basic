import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html'
})
export class LoadingPage {

  constructor(public navCtrl: NavController, private loadingCtrl: LoadingController) {}

  ionViewDidLoad() {
    console.log('Hello Loading Page');
  }

  showLoading() {
    let loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: 'Loading Please Wait...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 5000);
  }

}
