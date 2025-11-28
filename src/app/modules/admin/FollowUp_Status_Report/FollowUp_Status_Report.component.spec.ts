import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowUp_Status_ReportComponent } from './FollowUp_Status_Report.component';


describe('FollowUp_Status_ReportComponent', () => {
  let component: FollowUp_Status_ReportComponent;
  let fixture: ComponentFixture<FollowUp_Status_ReportComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FollowUp_Status_ReportComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowUp_Status_ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
