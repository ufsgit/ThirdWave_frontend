import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Freelancer_User_AmountComponent } from './Freelancer_User_Amount.component';

describe('Freelancer_User_AmountComponent', () => {
  let component: Freelancer_User_AmountComponent;
  let fixture: ComponentFixture<Freelancer_User_AmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Freelancer_User_AmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Freelancer_User_AmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
