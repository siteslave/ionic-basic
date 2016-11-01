import { Component } from '@angular/core';
import { NavController, LoadingController, ModalController } from 'ionic-angular';
import { Users } from '../../providers/users'
import { IHttpResult, IUser } from '../../models'
import { UsersInfoPage } from '../users-info/users-info'
import { UsersNewPage } from '../users-new/users-new'
@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {
  allUsers: Array<IUser>

  constructor(
    public navCtrl: NavController,
    private users: Users,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController
  ) { }

  ionViewDidLoad() {
    this.getList(); 
  }

  getList() {
    let loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: 'Loading please wait'
    });
    loading.present();

    this.users.getUsers()
      .then((res: IHttpResult) => {
        if (res.ok) {
          this.allUsers = <Array<IUser>>res.rows;
          loading.dismiss();
        } else {
          loading.dismiss();
          alert(JSON.stringify(res.err));
        };
      });
  }  

  info(user: IUser) {
    // alert(JSON.stringify(user))
    let modal = this.modalCtrl.create(UsersInfoPage, { user: user })
    modal.present();
    modal.onDidDismiss(() => {
      this.getList();
    });
  }

  newUser() {
    // alert(JSON.stringify(user))
    let modal = this.modalCtrl.create(UsersNewPage)
    modal.present();
    modal.onDidDismiss(() => {
      this.getList();
    });
  }

}
