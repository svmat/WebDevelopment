import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { User } from './user.model';
import { USERS } from "./users";

@Injectable()
export class UsersService {
  // provides current logged user
  currentUser:Subject<User> = new BehaviorSubject<User>(null);

  constructor() {
    this.currentUser.next(USERS[0]);
  }

  public setCurrentUser(newUser: User): void {
    this.currentUser.next(newUser);
  }

}

export const userServiceInjectables: Array<any> = [
  UsersService
];
