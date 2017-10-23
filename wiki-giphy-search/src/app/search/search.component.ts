import { Component, OnInit, Input, OnChanges, SimpleChange  } from '@angular/core';
import {WikiSearchService} from '../wiki-search.service';
import {GiphySearchService} from '../giphy-search.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  private loading: boolean = false;
  imgUrl: string;
  constructor(private wikipediaService: WikiSearchService, private giphy: GiphySearchService) {
      this.onLoad(false);
   }

  ngOnInit() {
  }

  search (term) {
    this.onLoad(true);
    this.wikipediaService.search(term).then(_ => this.loading = false);
    this.giphy.search(term).then(result => this.imgUrl = result["url"]);
  }

  onLoad(load: boolean){
    this.loading = load;
    this.imgUrl = "";
    this.wikipediaService.results = [];
  }

}
