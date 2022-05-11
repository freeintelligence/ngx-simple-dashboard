import { TestBed } from '@angular/core/testing';

import { NgxSimpleDashboardService } from './ngx-simple-dashboard.service';

describe('NgxSimpleDashboardService', () => {
  let service: NgxSimpleDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSimpleDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
