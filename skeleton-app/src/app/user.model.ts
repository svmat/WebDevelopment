import { uuid } from './util/uuid';
/**
* Represents an agent that sends messages
*/

export class User {
  firstName: string;
  lastName: string;
  emailAddress: string;
  profilImgUrl: string;
  id: string;

constructor(firstName: string, lastName: string, emailAddress: string, profileImage?: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailAddress = emailAddress;
    this.id = uuid();
    this.profilImgUrl = profileImage || "http://placehold.it/50/55C1E7/fff&text=" + firstName[0] + lastName[0];
  }
}
