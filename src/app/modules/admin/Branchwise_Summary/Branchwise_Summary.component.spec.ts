import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Branchwise_SummaryComponent } from './Branchwise_Summary.component';


describe('Branchwise_SummaryComponent', () => {
  let component: Branchwise_SummaryComponent;
  let fixture: ComponentFixture<Branchwise_SummaryComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Branchwise_SummaryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Branchwise_SummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
