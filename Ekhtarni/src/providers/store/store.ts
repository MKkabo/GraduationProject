import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the StoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StoreProvider {

  constructor(public http: HttpClient) {
    console.log('Hello StoreProvider Provider');
  }

  setUser(id) {
    localStorage.setItem('user', id);
  }

  getUserId() {
    return localStorage.getItem('user');
  }


  setUserData({ name, image }) {
    let userData = JSON.stringify({ name, image })
    localStorage.setItem('userData', userData);
  }

  getUserData() {
    return JSON.parse(localStorage.getItem('userData'))
  }


}
