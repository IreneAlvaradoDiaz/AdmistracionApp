import { TestBed } from '@angular/core/testing';

import { AdvertsService } from './Adverts.service';

describe('AdvertsService', () => {
  let service: AdvertsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdvertsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
