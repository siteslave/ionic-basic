import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { IUser } from '../models'

@Injectable()
export class Users {

  constructor(public http: Http, @Inject('REST_URL') private url) {
    console.log('Hello Users Provider');
  }

  getUsers() {
    let url = `${this.url}/users`

    return new Promise((resolve, reject) => {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
    
      this.http.get(url, options)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, err => {
          reject(err)
        });
    });

  }

  getGroups() {
    let url = `${this.url}/groups`

    return new Promise((resolve, reject) => {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
    
      this.http.get(url, options)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, err => {
          reject(err)
        });
    });

  }

  remove(id: string) {
    let url = `${this.url}/users/${id}`

    return new Promise((resolve, reject) => {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
  
      this.http.delete(url, options)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, err => {
          reject(err)
        });
    });

  }

  save(user: IUser) {
    let url = `${this.url}/users`

    return new Promise((resolve, reject) => {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = {
        username: user.username,
        name: user.name,
        email: user.email,
        group_id: user.group_id
      };

      this.http.post(url, body, options)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, err => {
          reject(err)
        });
    });

  }

  update(user: IUser) {
    let url = `${this.url}/users`

    return new Promise((resolve, reject) => {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
    
      let body = {
        id: user.id,
        username: user.username,
        name: user.name,
        email: user.email,
        group_id: user.group_id
      };
      
      this.http.put(url, body, options)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, err => {
          reject(err)
        });
    });

  }

}
