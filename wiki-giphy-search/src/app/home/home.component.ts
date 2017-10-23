import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  title = 'Welcome, eccentic!';
  searchRequest: string;

  constructor() { }

  ngOnInit() {
  }

  update(searchText: HTMLInputElement): void {
      this.searchRequest = searchText.value;
  }

}
