import { Injectable } from '@angular/core';
import {HttpModule, Http, Response, URLSearchParams} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class GiphySearchService {
  apiRoot: string = 'https://api.giphy.com/v1/gifs/search?';
  apiKey: string = "vyNvev5GZhAz9oTJRnteuVsdxYvitOwQ";
  imgUrl: string

  constructor(private http: Http) { }

  search (term: string){
      let search = new URLSearchParams();
      search.set('api_key', this.apiKey);
      search.set('q', term);
      search.set('limit', '1');
      search.set('offset', '0');
      search.set('rating', 'G');
      search.set('lang', 'en');
      return this.http
              .get(this.apiRoot, { search })
              .toPromise()
              .then((res) => { // Success
                  this.imgUrl = res.json()['data'][0]['url'];
                  return res.json()['data'][0]["images"]["fixed_height_downsampled"];
                }
              );
  }

}
