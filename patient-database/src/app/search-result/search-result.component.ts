import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  private _displayedNames = [];
  label = "";

  @Input()
  set displayedNames(names){
    this._displayedNames = names;
  }

  get displayedNames(): string[] {
    if (this._displayedNames.length > 0){
      this.label = "Search Result";
    }
    return this._displayedNames;
  }

  constructor() { }

  ngOnInit() {
  }

}
