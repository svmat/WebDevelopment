import { TestBed, inject } from '@angular/core/testing';

import { NailDesignsService } from './nail-designs.service';

describe('NailDesignsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NailDesignsService]
    });
  });

  it('should be created', inject([NailDesignsService], (service: NailDesignsService) => {
    expect(service).toBeTruthy();
  }));
});
