import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { My_Student_ReportComponent } from './My_Student_Report.component';


describe('Student_ReportComponent', () => {
  let component: My_Student_ReportComponent;
  let fixture: ComponentFixture<My_Student_ReportComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [My_Student_ReportComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(My_Student_ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
