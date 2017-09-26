import { Component, OnInit, Input, HostBinding } from '@angular/core';
import {Person} from './person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() person: Person;

  constructor() { }

  ngOnInit() {
  }

}
