import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWorkingStatusReportComponent } from './user-working-status-report.component';

describe('UserWorkingStatusReportComponent', () => {
  let component: UserWorkingStatusReportComponent;
  let fixture: ComponentFixture<UserWorkingStatusReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserWorkingStatusReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWorkingStatusReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
