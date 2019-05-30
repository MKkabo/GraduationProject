import { StoreProvider } from './../store/store';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class DbProvider {
  base_url: string = 'http://localhost:3000/api'
  data: any[];
  user: any;
  constructor(public http: HttpClient, private store: StoreProvider) {
    console.log('Hello DbProvider Provider');
  }

  getData() {
    return this.http.get('/assets/db.json');
  }

  setData(data) {
    this.data = data;
  }

  login(email, password) {
    // let user = this.data.filter((user) => {
    //   return user.name === username && user.password === password
    // });
    return this.http.post(`${this.base_url}/users/login`, { email, password });
    // if (user.length > 0) return user;
    // else return [];
  }

  register(body) {
    console.log(body);
    return this.http.post(`${this.base_url}/users/signup`, body);
  }


  completeProfile(fd: FormData) {
    return this.http.post(`${this.base_url}/profile/complete`, fd);
  }

  updateProfile(body) {
    return this.http.post(`${this.base_url}/profile/updateProfile`, body);
  }

  getProfile() {
    return this.http.get(`${this.base_url}/profile/${this.store.getUserId()}`);
  }


  getCourses() {
    console.log('Inside');
    return this.http.get(`${this.base_url}/courses/all`);
  }

  getJobs() {
    console.log('Inside');
    return this.http.get(`${this.base_url}/jobs/all`);
  }

  getNewsfeed() {
    console.log('Inside');
    return this.http.get(`${this.base_url}/newsfeed/all`);
  }


  searchCourses(search) {
    let body = { search };
    return this.http.post(`${this.base_url}/courses/search`, body);
  }

  // setUser(user) {
  //   this.user = user;
  // }

  // setUserProp(data, prop) {
  //   this.user[prop] = data;
  // }

  // getUserData() {
  //   return this.user;
  // }







}
