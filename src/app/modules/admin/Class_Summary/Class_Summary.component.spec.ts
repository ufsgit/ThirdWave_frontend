import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Class_SummaryComponent } from './Class_Summary.component';

describe('Class_SummaryComponent', () => {
  let component: Class_SummaryComponent;
  let fixture: ComponentFixture<Class_SummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Class_SummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Class_SummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
