import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Agent_Application_ReportComponent } from './Agent_Application_Report.component';


describe('Agent_Application_ReportComponent', () => {
  let component: Agent_Application_ReportComponent;
  let fixture: ComponentFixture<Agent_Application_ReportComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Agent_Application_ReportComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Agent_Application_ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
