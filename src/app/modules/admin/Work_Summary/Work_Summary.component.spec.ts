import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Work_SummaryComponent } from './Work_Summary.component';


describe('Work_SummaryComponent', () => {
  let component: Work_SummaryComponent;
  let fixture: ComponentFixture<Work_SummaryComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Work_SummaryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Work_SummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
