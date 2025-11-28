import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Efficiency_ReportComponent } from './Efficiency_Report.component';


describe('Student_ReportComponent', () => {
  let component:Efficiency_ReportComponent;
  let fixture: ComponentFixture<Efficiency_ReportComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Efficiency_ReportComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Efficiency_ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
