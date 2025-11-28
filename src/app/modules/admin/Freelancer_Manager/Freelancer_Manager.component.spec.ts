import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Freelancer_ManagerComponent } from './Freelancer_Manager.component';

describe('Freelancer_ManagerComponent', () => {
  let component: Freelancer_ManagerComponent;
  let fixture: ComponentFixture<Freelancer_ManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Freelancer_ManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Freelancer_ManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
