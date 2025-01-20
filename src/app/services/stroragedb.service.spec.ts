import { TestBed } from '@angular/core/testing';

import { StroragedbService } from './stroragedb.service';

describe('StroragedbService', () => {
  let service: StroragedbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StroragedbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
