import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
})
export class SearchInputComponent implements OnInit {
  searchT = "";
  options = ['name', 'doctor', 'name starts with'];
  searchOption = "name";
  constructor() { }

  ngOnInit() {
  }

  selectItem(value){
    console.log("SELECTED OPTION");
    console.log(value);
  }

}
