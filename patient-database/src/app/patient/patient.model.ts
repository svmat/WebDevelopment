export class Patient {
  firstName: string;
  lastName: string;
  emailAddress: string;
  doctorLastName: string;
  profileImage: string;


constructor(firstName: string, lastName: string, emailAddress: string, doctorLastName: string, profileImage?: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailAddress = emailAddress;
    this.doctorLastName = doctorLastName;
    this.profileImage = profileImage || "";
  }
}
