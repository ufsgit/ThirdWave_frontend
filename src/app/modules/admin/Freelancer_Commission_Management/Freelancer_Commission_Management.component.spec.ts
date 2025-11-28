import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Freelancer_Commission_ManagementComponent } from './Freelancer_Commission_Management.component';


describe('Freelancer_Commission_ManagementComponent', () => {
  let component: Freelancer_Commission_ManagementComponent;
  let fixture: ComponentFixture<Freelancer_Commission_ManagementComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Freelancer_Commission_ManagementComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Freelancer_Commission_ManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
