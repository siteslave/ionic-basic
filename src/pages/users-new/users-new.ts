import { Component, OnInit } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { Users } from '../../providers/users'
import { IUser, IGroup, IHttpResult } from '../../models'
@Component({
  selector: 'page-users-new',
  templateUrl: 'users-new.html'
})
export class UsersNewPage implements OnInit {
  groups: Array<IGroup>
  user: IUser
  constructor(public navCtrl: NavController,
    public viewCtrl: ViewController,
    public users: Users
  ) {
    this.user = { id: null, name: null, username: null, group_id: null, email: null };
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
    this.viewCtrl.dismiss();
  };  

  save() {
    this.user.id = this.user.username;
    console.log(this.user)
    if (this.user.username && this.user.email && this.user.name && this.user.group_id) {
      this.users.save(this.user)
        .then((res: IHttpResult) => {
          if (res.ok) {
          this.viewCtrl.dismiss();
          } else {
            alert(JSON.stringify(res.err));  
        }
      })
    } else {
      alert('Invalid data')
    }
  }
}
