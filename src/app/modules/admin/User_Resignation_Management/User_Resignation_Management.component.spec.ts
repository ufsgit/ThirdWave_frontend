import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { User_Resignation_ManagementComponent } from './User_Resignation_Management.component';


describe('User_Resignation_ManagementComponent', () => {
  let component: User_Resignation_ManagementComponent;
  let fixture: ComponentFixture<User_Resignation_ManagementComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [User_Resignation_ManagementComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(User_Resignation_ManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
