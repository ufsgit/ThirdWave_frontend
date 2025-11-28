import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Staff_Target_ReportComponent } from './Staff_Target_Report.component';


describe('Staff_Target_ReportComponent', () => {
  let component: Staff_Target_ReportComponent;
  let fixture: ComponentFixture<Staff_Target_ReportComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Staff_Target_ReportComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Staff_Target_ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
