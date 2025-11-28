import { async, ComponentFixture, TestBed } from '@angular/core/testing';

//import { Student_ReportComponent } from './Fees_Receipt_Report.component';
import { Fees_Receipt_ReportComponent } from './Fees_Receipt_Report.component';


describe('Fees_Receipt_ReportComponent', () => {
  let component: Fees_Receipt_ReportComponent;
  let fixture: ComponentFixture<Fees_Receipt_ReportComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Fees_Receipt_ReportComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fees_Receipt_ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
