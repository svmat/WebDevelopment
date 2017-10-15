import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'item';
  @Input() animal: Animal;

  constructor() { }

  ngOnInit() {
  }

}
