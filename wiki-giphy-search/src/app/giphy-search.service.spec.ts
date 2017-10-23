/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GiphySearchService } from './giphy-search.service';

describe('GiphySearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GiphySearchService]
    });
  });

  it('should ...', inject([GiphySearchService], (service: GiphySearchService) => {
    expect(service).toBeTruthy();
  }));
});
