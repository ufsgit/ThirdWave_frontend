import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Application_List_report_DirectComponent } from './Application_List_report_Direct.component';


describe('Application_List_report_DirectComponent', () => {
  let component: Application_List_report_DirectComponent;
  let fixture: ComponentFixture<Application_List_report_DirectComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Application_List_report_DirectComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Application_List_report_DirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
