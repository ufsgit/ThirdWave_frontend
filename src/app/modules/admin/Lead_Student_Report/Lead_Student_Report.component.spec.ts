import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lead_Student_ReportComponent } from './Lead_Student_Report.component';


describe('Lead_Student_ReportComponent', () => {
  let component: Lead_Student_ReportComponent;
  let fixture: ComponentFixture<Lead_Student_ReportComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lead_Student_ReportComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lead_Student_ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
