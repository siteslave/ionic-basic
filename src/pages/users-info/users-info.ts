import { Component } from '@angular/core';
import {
  Platform, NavController, NavParams, ViewController, AlertController,
  ToastController, ModalController
} from 'ionic-angular';
import { IUser, IHttpResult } from '../../models'
import { Users } from '../../providers/users'
import { UsersEditPage } from '../users-edit/users-edit'

@Component({
  selector: 'page-users-info',
  templateUrl: 'users-info.html'
})
export class UsersInfoPage {
  user: IUser
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public users: Users,
    public toastCtrl: ToastController,
    public platform: Platform,
    public modalCtrl: ModalController

  ) {
    this.user = this.navParams.get('user');
  }

  ionViewDidLoad() {
    console.log(this.user);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  showEdit() {
    let modal = this.modalCtrl.create(UsersEditPage, {user: this.user})
    modal.present();
    modal.onDidDismiss((user: IUser) => {
      this.user = user;
    });
  };
  
  remove() {
    let toast = this.toastCtrl.create({
      message: 'User was deleted successfully',
      duration: 3000
    });

    let confirm = this.alertCtrl.create({
      title: 'Are you sure?',
      message: 'คุณต้องการลบรายการนี้ ใช่หรือไม่?',
      buttons: [
        {
          text: 'ใช่',
          handler: () => {
            this.users.remove(this.user.id)
              .then((res: IHttpResult) => {
                if (res.ok) {
                  toast.present();
                  this.viewCtrl.dismiss()
                } else {
                  alert(JSON.stringify(res.err));
                }
              });
          }
        },
        {
          text: 'ไม่ใช่',
          handler: () => {
            // no event
          }
        }
      ]
    })

    confirm.present();
  }

}
