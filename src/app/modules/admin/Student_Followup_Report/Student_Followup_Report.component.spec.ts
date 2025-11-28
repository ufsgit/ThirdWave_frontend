import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Student_Followup_ReportComponent } from './Student_Followup_Report.component';


describe('Student_Followup_ReportComponent', () => {
  let component: Student_Followup_ReportComponent;
  let fixture: ComponentFixture<Student_Followup_ReportComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Student_Followup_ReportComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Student_Followup_ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
