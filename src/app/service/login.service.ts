import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { literalMap } from '@angular/compiler';
// import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../user';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public loginStatusSubject = new Subject<boolean>();
  
  // rolename!:string;

  // rolename = {
  //   "roleid": { "roleId": "", "roleName": "" }
  // }
  // user1:User =new User();
  constructor(private http: HttpClient) { }


  public loginDetails(user: User) {
    console.log(user);
    return this.http.post(`${baseUrl}/api/login`, user);
    
    // return this.http.post(`${baseUrl}/api/login`, user);
  }

  // current user: which is loggedin
  // public getCurrentUser(user: User) {
  //   let local = this.http.get(`${baseUrl}/current-user`)
  //   console.log(local);
  //   return local;
  // }

  // public getCurrentUserRole(user: User) {

  //   let local = this.http.get(`${baseUrl}/${user.username}`)
  //   console.log(local);
  //   return local;
  // }




  // login user: set token in localStorage

  public loginUser(user:any) {
    localStorage.setItem('token', user);

    return true;
  }

  //isLogin: user is logged in or not
  public isLoggedIn() {
    let tokenStr = localStorage.getItem('token');
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;
    }
  }

  // logout : remove token from local storage
  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.clear();
    return true;
  }

  //get token
  public getToken() {
    return localStorage.getItem('token');
  }

  //set userDetail
  public setUser(user:any) {
    localStorage.setItem('user', JSON.stringify(user.USER)); // for test url
    // localStorage.setItem('user', JSON.stringify(user)) // for prod url
    // console.log("set value in localStorage is : "+localStorage);
  }

  //getUser
  public getUser() {
    let userStr = localStorage.getItem('user');
    // console.log("set value in userStr is : "+userStr);
    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      this.logout();
      return null;
    }
  }


  // get user role

  public getUserRole() {
    // let user = this.getUser();
    // console.log("inside role : "+this.getUser().roleid.roleName);
    console.log("inside role : "+this.getUser().profile);

    return this.getUser().profile;
    // return this.getUser().profile;
    // return this.getUser().roleid.roleName;
  }
}
