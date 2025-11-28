import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Student_ReportComponent } from './Student_Report.component';


describe('Student_ReportComponent', () => {
  let component: Student_ReportComponent;
  let fixture: ComponentFixture<Student_ReportComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Student_ReportComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Student_ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
