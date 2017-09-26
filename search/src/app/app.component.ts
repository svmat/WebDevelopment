import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchList = {};
  searchText: string;
  foundEmail: string;
  displayNames = [];

  constructor(private http: Http) {
    // to get emails from json file
    http.get('./assets/class-email-dictionary.json').subscribe(data => {
        //console.log(data);
        // remove non-printable and other non-valid JSON chars
        this.searchList = JSON.parse(data['_body'].replace(/'/g, '"'));
        //console.log(this.searchList);
        this.displayNames = Object.keys(this.searchList);
      }
    );
    this.foundEmail = "";
  }

  search(): void {
      console.log("Search for email function");
      if (this.searchText in this.searchList) {
          this.foundEmail = this.searchList[this.searchText];
      } else {
          this.foundEmail =  'no matches found';
      }
  }
}
