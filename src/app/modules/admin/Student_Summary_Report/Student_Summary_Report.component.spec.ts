import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Student_Summary_ReportComponent } from './Student_Summary_Report.component';


describe('Student_Summary_ReportComponent', () => {
  let component: Student_Summary_ReportComponent;
  let fixture: ComponentFixture<Student_Summary_ReportComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Student_Summary_ReportComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Student_Summary_ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
