import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Application_ListComponent } from './Application_List.component';


describe('Application_ListComponent', () => {
  let component: Application_ListComponent;
  let fixture: ComponentFixture<Application_ListComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Application_ListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Application_ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
