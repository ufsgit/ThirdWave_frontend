import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Freelancer_Student_DetailsComponent } from './Freelancer_Student_Details.component';

describe('Freelancer_Student_DetailsComponent', () => {
  let component: Freelancer_Student_DetailsComponent;
  let fixture: ComponentFixture<Freelancer_Student_DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Freelancer_Student_DetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Freelancer_Student_DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
