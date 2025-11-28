import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Userwise_SummaryComponent } from './Userwise_Summary.component';


describe('Userwise_SummaryComponent', () => {
  let component: Userwise_SummaryComponent;
  let fixture: ComponentFixture<Userwise_SummaryComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Userwise_SummaryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Userwise_SummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
