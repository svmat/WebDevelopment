export class Person {
  firstname: string;
  lastname: string;
  email: string;
  fullname: string;

  constructor(firstname: string, lastname: string, email: string) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.fullname = firstname + " " + lastname;
  }
}
