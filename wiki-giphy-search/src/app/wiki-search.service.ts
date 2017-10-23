import { Injectable } from '@angular/core';
import {HttpModule, Http, Response, URLSearchParams} from '@angular/http';
import 'rxjs/Rx';
import {Request} from './userRequest.model';

@Injectable()
export class WikiSearchService {
  results: string[];
  apiRoot: string = 'https://en.wikipedia.org/w/api.php?';
  requests: Request[] = [];
  dt = new Date();

  constructor(private http: Http) {
    this.results = [];
  }

  search (term: string) {
      this.requests.push(new Request(this.dt.toLocaleString(), term));
      let promise = new Promise((resolve, reject) => {
      let search = new URLSearchParams()
      search.set('action', 'opensearch');
      search.set('search', term);
      search.set('format', 'json');
      search.set('origin', '*');
      this.http
              .get(this.apiRoot, { search })
              .toPromise()
              .then(res => { // Success
                  this.results = res.json()[1];
                  resolve();
                }
              );
    });
    return promise;
  }

}
