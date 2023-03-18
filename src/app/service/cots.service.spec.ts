import { TestBed } from '@angular/core/testing';

import { CotsService } from './cots.service';

describe('CotsService', () => {
  let service: CotsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CotsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
