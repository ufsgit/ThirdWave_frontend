import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Application_DataComponent } from './Application_Data.component';


describe('Application_DataComponent', () => {
  let component: Application_DataComponent;
  let fixture: ComponentFixture<Application_DataComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Application_DataComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Application_DataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
