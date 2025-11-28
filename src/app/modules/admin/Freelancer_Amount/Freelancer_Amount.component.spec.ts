import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Freelancer_AmountComponent } from './Freelancer_Amount.component';

describe('Freelancer_AmountComponent', () => {
  let component: Freelancer_AmountComponent;
  let fixture: ComponentFixture<Freelancer_AmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Freelancer_AmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Freelancer_AmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
