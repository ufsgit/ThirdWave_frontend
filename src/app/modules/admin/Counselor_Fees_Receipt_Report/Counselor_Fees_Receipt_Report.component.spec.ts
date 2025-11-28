import { async, ComponentFixture, TestBed } from '@angular/core/testing';

//import { Student_ReportComponent } from './Fees_Receipt_Report.component';
import { Counselor_Fees_Receipt_ReportComponent } from './Counselor_Fees_Receipt_Report.component';


describe('Counselor_Fees_Receipt_ReportComponent', () => {
  let component:Counselor_Fees_Receipt_ReportComponent;
  let fixture: ComponentFixture<Counselor_Fees_Receipt_ReportComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Counselor_Fees_Receipt_ReportComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Counselor_Fees_Receipt_ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
