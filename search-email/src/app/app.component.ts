import { Component } from '@angular/core';
import {Person} from './person/person.model';

@Component({

  // decorator
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  people: Person[];
  foundEmail: string;

  constructor() {
      this.people = [
        new Person('Chandler', 'Gegg', 'chandlergegg@gmail.com'),
        new Person('Albert', 'Einstein', 'alberteinstein@gmail.com'),
        new Person('Emma', 'Watson', 'emmawatson@gmail.com')
      ];
      this.foundEmail = "";
  }

  searchPerson(fullname?: HTMLInputElement): void {
      console.log("Search for Person function");
      if (fullname) {
        var foundPerson = this.people.find(function (p) { return p.fullname === fullname.value; });
        if (foundPerson != undefined){
            this.foundEmail =  foundPerson.email;
        } else {
          this.foundEmail =  'no matches found';
        }
      }
  }
}
