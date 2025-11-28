import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Agent_StudentComponent } from './Agent_Student.component';

describe('Agent_StudentComponent', () => {
  let component: Agent_StudentComponent;
  let fixture: ComponentFixture<Agent_StudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Agent_StudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Agent_StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
