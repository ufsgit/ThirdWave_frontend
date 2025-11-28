import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Direct_Application_ReportComponent } from './Direct_Application_Report.component';


describe('Direct_Application_ReportComponent', () => {
  let component: Direct_Application_ReportComponent;
  let fixture: ComponentFixture<Direct_Application_ReportComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Direct_Application_ReportComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Direct_Application_ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
