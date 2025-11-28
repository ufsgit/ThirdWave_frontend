import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Enquirywise_Status_ReportComponent } from './Enquirywise_Status_Report.component';


describe('Enquirywise_Status_ReportComponent', () => {
  let component: Enquirywise_Status_ReportComponent;
  let fixture: ComponentFixture<Enquirywise_Status_ReportComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Enquirywise_Status_ReportComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Enquirywise_Status_ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
