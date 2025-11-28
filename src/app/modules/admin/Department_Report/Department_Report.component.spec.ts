import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Department_ReportComponent } from './Department_Report.component';


describe('Department_ReportComponent', () => {
  let component: Department_ReportComponent;
  let fixture: ComponentFixture<Department_ReportComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Department_ReportComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Department_ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
