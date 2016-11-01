import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Users } from '../../providers/users'
import { IUser, IGroup, IHttpResult } from '../../models'
@Component({
  selector: 'page-users-edit',
  templateUrl: 'users-edit.html'
})
export class UsersEditPage implements OnInit {
  groups: Array<IGroup>
  user: IUser
  constructor(public navCtrl: NavController,
    public viewCtrl: ViewController,
    public users: Users,
    public navParams: NavParams
  ) {
    let _user = <IUser>this.navParams.get('user');
    this.user = { id: _user.id, username: _user.id, name: _user.name, email: _user.email, group_id: _user.group_id}

    console.log(this.user)
   }

  ngOnInit() {
    this.users.getGroups()
      .then((res: IHttpResult) => {
        if (res.ok) {
          this.groups = <Array<IGroup>>res.rows;
      }
    })
  } 
  
  ionViewDidLoad() {
    console.log('Hello UsersNew Page');
  }

  dismiss() {
    this.viewCtrl.dismiss(this.user);
  };  

  save() {
    this.user.id = this.user.username;
    console.log(this.user)
    if (this.user.username && this.user.email && this.user.name && this.user.group_id) {
      this.users.update(this.user)
        .then((res: IHttpResult) => {
          if (res.ok) {
          this.viewCtrl.dismiss(this.user);
          } else {
            alert(JSON.stringify(res.err));  
        }
      })
    } else {
      alert('Invalid data')
    }
  }
}
