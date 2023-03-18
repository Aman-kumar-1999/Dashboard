import { TestBed } from '@angular/core/testing';

import { RenewalService } from './renewal.service';

describe('RenewalService', () => {
  let service: RenewalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RenewalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
