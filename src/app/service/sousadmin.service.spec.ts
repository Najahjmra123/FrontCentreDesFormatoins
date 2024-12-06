import { TestBed } from '@angular/core/testing';

import { SousadminService } from './sousadmin.service';

describe('SousadminService', () => {
  let service: SousadminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SousadminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
