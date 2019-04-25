import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DbProvider {
  data: any[];
  constructor(public http: HttpClient) {
    console.log('Hello DbProvider Provider');
  }

  getData() {
    return this.http.get('/assets/db.json');
  }

  setData(data) {
    this.data = data;
  }

  login(username, password) {
    let user = this.data.filter((user) => {
      return user.name === username && user.password === password
    });
    if (user.length > 0) return user;
    else return [];
  }





}
