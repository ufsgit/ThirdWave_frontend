import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Department_Status_ReportComponent } from './Department_Status_Report.component';


describe('Department_Status_ReportComponent', () => {
  let component: Department_Status_ReportComponent;
  let fixture: ComponentFixture<Department_Status_ReportComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Department_Status_ReportComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Department_Status_ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
