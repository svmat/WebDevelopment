import { Component, OnInit, Input, OnChanges, SimpleChange} from '@angular/core';
import {Request} from './userRequest.model';
import {WikiSearchService} from '../wiki-search.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent implements OnInit {
  constructor(private wikipediaService: WikiSearchService) {
   }

  ngOnInit() {
  }

}
