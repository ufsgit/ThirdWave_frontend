import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Process_StatusComponent } from './Process_Status.component';

describe('DepartmentComponent', () => {
  let component: Process_StatusComponent;
  let fixture: ComponentFixture<Process_StatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Process_StatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Process_StatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
