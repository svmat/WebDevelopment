import { uuid } from './util/uuid';


export class User {
  id: string;
  username: string;
  pwd: string;
  appointments: Date[];
  liked_designs: string[];
  isLoggedIn: boolean;

  constructor(username: string, password: string){
    this.id = uuid();
    this.username = username;
    this.pwd = password;
    this.appointments = [];
    this.liked_designs = [];
    this.isLoggedIn = false;
  }

  addAppointment(newd: Date){
    this.appointments.push(newd);
  }


}
