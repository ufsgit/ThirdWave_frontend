import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Receipt_Summary_Report_FreelancerComponent } from './Receipt_Summary_Report_Freelancer.component';


describe('Receipt_Summary_Report_FreelancerComponent', () => {
  let component: Receipt_Summary_Report_FreelancerComponent;
  let fixture: ComponentFixture<Receipt_Summary_Report_FreelancerComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Receipt_Summary_Report_FreelancerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Receipt_Summary_Report_FreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
