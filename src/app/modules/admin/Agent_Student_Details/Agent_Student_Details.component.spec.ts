import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Agent_StudentDetailsComponent } from './Agent_Student_Details.component';

describe('Agent_StudentDetailsComponent', () => {
  let component: Agent_StudentDetailsComponent;
  let fixture: ComponentFixture<Agent_StudentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Agent_StudentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Agent_StudentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
