import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Agent_Student_ReportComponent } from './Agent_Student_Report.component';


describe('Agent_Student_ReportComponent', () => {
  let component: Agent_Student_ReportComponent;
  let fixture: ComponentFixture<Agent_Student_ReportComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Agent_Student_ReportComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Agent_Student_ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
