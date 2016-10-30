import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

export interface IGroup {
  id: number,
  name: string
};

export interface IUser {
  groupId: number,
  name: string
};

@Component({
  selector: 'page-input-select',
  templateUrl: 'input-select.html'
})
export class InputSelectPage {

  username: string;
  password: string;
  loginAs: any;
  groupId: number;
  groups: Array<IGroup>;
  allUsers: Array<IUser>;
  users: Array<IUser>;

  constructor(public navCtrl: NavController) {
    this.groups = [
      { id: 1, name: 'Admin' },
      { id: 2, name: 'Staff' },
      { id: 3, name: 'Guest' },
    ];
    this.allUsers = [
      { groupId: 1, name: 'Satit Rianpit' },
      { groupId: 1, name: 'Bill Gate' },
      { groupId: 2, name: 'Steve Job' },
      { groupId: 3, name: 'John Doe' },
    ];
  }

  ionViewDidLoad() {
    console.log('Hello InputSelect Page');
  }

  login() {
    console.log(this.username, this.password)
    console.log(this.groupId, this.loginAs)
  }  

  getUsers(groupId: number) {
    this.users = [];

    this.allUsers.forEach(v => {
      if (v.groupId == groupId) this.users.push(v)
    });
  }
}
