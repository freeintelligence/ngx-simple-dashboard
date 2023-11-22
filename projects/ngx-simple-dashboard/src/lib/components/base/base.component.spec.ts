import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSimpleDashboardBaseComponent } from './base.component';

describe('NgxSimpleDashboardBaseComponent', () => {
  let component: NgxSimpleDashboardBaseComponent;
  let fixture: ComponentFixture<NgxSimpleDashboardBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxSimpleDashboardBaseComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSimpleDashboardBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
