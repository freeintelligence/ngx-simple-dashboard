import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSimpleDashboardSidenavComponent } from './sidenav.component';

describe('NgxSimpleDashboardSidenavComponent', () => {
  let component: NgxSimpleDashboardSidenavComponent;
  let fixture: ComponentFixture<NgxSimpleDashboardSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxSimpleDashboardSidenavComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSimpleDashboardSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
