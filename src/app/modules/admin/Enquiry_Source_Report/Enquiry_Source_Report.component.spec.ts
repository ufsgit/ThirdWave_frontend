import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Enquiry_Source_ReportComponent } from './Enquiry_Source_Report.component';


describe('Enquiry_Source_ReportComponent', () => {
  let component: Enquiry_Source_ReportComponent;
  let fixture: ComponentFixture<Enquiry_Source_ReportComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Enquiry_Source_ReportComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Enquiry_Source_ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
