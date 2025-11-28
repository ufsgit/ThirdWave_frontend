import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Application_List_reportComponent } from './Application_List_report.component';


describe('Application_List_reportComponent', () => {
  let component: Application_List_reportComponent;
  let fixture: ComponentFixture<Application_List_reportComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Application_List_reportComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Application_List_reportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
