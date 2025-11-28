import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Receipt_Summary_Report_AgentComponent } from './Receipt_Summary_Report_Agent.component';


describe('Receipt_Summary_Report_AgentComponent', () => {
  let component: Receipt_Summary_Report_AgentComponent;
  let fixture: ComponentFixture<Receipt_Summary_Report_AgentComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Receipt_Summary_Report_AgentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Receipt_Summary_Report_AgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
