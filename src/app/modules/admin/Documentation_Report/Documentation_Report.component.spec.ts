import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Documentation_ReportComponent } from './Documentation_Report.component';


describe('Documentation_ReportComponent', () => {
  let component: Documentation_ReportComponent;
  let fixture: ComponentFixture<Documentation_ReportComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Documentation_ReportComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Documentation_ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
