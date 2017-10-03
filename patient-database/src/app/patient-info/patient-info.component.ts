import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient/patient.model';


@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})

export class PatientInfoComponent implements OnInit {
  patients = [];
  displayedNames = [];

  constructor() {
    this.patients = [
      new Patient('Steve', 'Jobs', 'steve.jobs@apple.com', 'johnson', './assets/cat1.jpg'),
      new Patient('Olivia', 'Ayala', 'oliviaayalay@gmail.com', 'smith', './assets/2.jpg'),
      new Patient('Adrian', 'Baran', 'adrian.baran.30@gmail.com', 'johnson', './assets/cat3.jpg'),
      new Patient('Gabriel', 'Bouzard', 'gabrielbouzard14@gmail.com', 'akhter', './assets/cat4.jpeg'),
      new Patient('Nathaniel', 'Brengle', 'nathaniel.brengle@gmail.com', 'johnson', './assets/cat5.jpg'),
      new Patient('Benjamin', 'Conrad', 'bconrad18@gmail.com', 'akhter', './assets/cat6.jpg'),
      new Patient('Ru', 'Fang', 'RFANG2@mail.depaul.edu', 'smith', './assets/cat7.jpg'),
      new Patient('Corina Mercedes', 'Ferrer Marcano', 'corinaferrer93@gmail.com', 'toomey', './assets/8.jpg'),
      new Patient('Karrin', 'Melton', 'karrinjmelton@gmail.com', 'johnson', './assets/r9.jpg'),
      new Patient('Dmitry', 'Shatalov', 'WIZARD511@HOTMAIL.COm', 'johnson', './assets/r10.jpg'),
      new Patient('Carl', 'Smith', 'CARLEUGENE@AOL.COM', 'akhter', './assets/r11.jpg'),
      new Patient('Michael', 'Vieth', 'michaelsoccer35@gmail.com', 'toomey', './assets/12.jpeg')
    ];
    }

  ngOnInit() {
  }

  search(searchRequest: string, searchOption: string): void {
      console.log(searchOption);
      console.log("<--searchOption");
      this.displayedNames = [];

      for (var i=0;i< this.patients.length;i++) {
        var p = this.patients[i];
        if (searchOption == 'name' && searchRequest.toLowerCase().includes(p.firstName.toLowerCase()) || searchRequest.toLowerCase().includes(p.lastName.toLowerCase())){
          this.displayedNames.push(p.firstName + " " + p.lastName);
        } else if (searchOption == 'doctor' && searchRequest.toLowerCase().includes(p.doctorLastName.toLowerCase())){
          this.displayedNames.push(p.firstName + " " + p.lastName);
        } else if (searchOption == 'name starts with' && p.firstName.toLowerCase().startsWith(searchRequest.toLowerCase())){
          this.displayedNames.push(p.firstName + " " + p.lastName);
        }
      }

      if (this.displayedNames.length == 0){
        this.displayedNames.push("no matches found");
      }
  }

}
