import { TestBed } from '@angular/core/testing';

import { LuxuryService } from './luxury.service';

describe('LuxuryService', () => {
  let service: LuxuryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LuxuryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
