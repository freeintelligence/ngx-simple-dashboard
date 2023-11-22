import { TestBed } from '@angular/core/testing';

import { NgxSimpleDashboardNavService } from './nav.service';

describe('NgxSimpleDashboardNavService', () => {
  let service: NgxSimpleDashboardNavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSimpleDashboardNavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
