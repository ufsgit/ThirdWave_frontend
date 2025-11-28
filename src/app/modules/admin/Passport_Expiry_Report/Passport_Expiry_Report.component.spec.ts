import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Passport_Expiry_ReportComponent } from './Passport_Expiry_Report.component';


describe('Passport_Expiry_ReportComponent', () => {
  let component: Passport_Expiry_ReportComponent;
  let fixture: ComponentFixture<Passport_Expiry_ReportComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Passport_Expiry_ReportComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Passport_Expiry_ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
