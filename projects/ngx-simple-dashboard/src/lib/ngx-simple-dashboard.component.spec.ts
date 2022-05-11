import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSimpleDashboardComponent } from './ngx-simple-dashboard.component';

describe('NgxSimpleDashboardComponent', () => {
  let component: NgxSimpleDashboardComponent;
  let fixture: ComponentFixture<NgxSimpleDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxSimpleDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSimpleDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
