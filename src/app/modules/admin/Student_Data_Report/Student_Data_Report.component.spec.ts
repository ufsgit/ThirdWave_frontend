import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Student_Data_ReportComponent } from './Student_Data_Report.component';


describe('Student_Data_ReportComponent', () => {
  let component: Student_Data_ReportComponent;
  let fixture: ComponentFixture<Student_Data_ReportComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Student_Data_ReportComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Student_Data_ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
