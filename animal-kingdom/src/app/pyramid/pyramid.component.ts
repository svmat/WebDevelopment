import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';
import {PyramidRow} from '../pyramid-row/pyramid-row.model';


@Component({
  selector: 'app-pyramid',
  templateUrl: './pyramid.component.html',
  styleUrls: ['./pyramid.component.css']
})
export class PyramidComponent implements OnInit {
  rows: PyramidRow[];

  constructor(private AnimalService: AnimalService ) {
    this.rows = this.AnimalService.getRows();
   }

  ngOnInit() {
  }

}
