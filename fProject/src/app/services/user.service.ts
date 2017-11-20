import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { USERS } from '../models/mock-users';
import { Observable } from 'rxjs';


@Injectable()
export class UserService {

  private currentUser: User;
  private users: User[];

  constructor() {
    this.users = USERS;
    this.currentUser = null;
   }

  getUserId(username: string, pwd: string){
    let searchUser = this.users.find(u => u.username == username && u.pwd == pwd);
    if (searchUser) {
      return searchUser.id;
    } else {
      return null;
    }
  }

  setUserLogIn(username: string, pwd: string) {
      console.log("IN USER SERVICE SET USER LOG IN");
      console.log(username);
      console.log(pwd);
      let searchUser = this.users.find(user => user.username == username && user.pwd == pwd);
      if (searchUser){
          console.log("found user");
          console.log(searchUser);
          searchUser.isLoggedIn = true;
          this.currentUser = searchUser;
          console.log(this.currentUser);
          return true;
      }
      return false;
  }

  setUserLogOut() {
      //this.users.find( u => u.id == this.currentUser.id).isLoggedIn = false;
      this.currentUser.isLoggedIn = false;
      this.currentUser = null;
  }

  getUserLoggedIn() {
      return this.currentUser != null;
  }
}
