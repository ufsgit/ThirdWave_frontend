import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Process_Status_chartComponent } from './Process_Status_chart.component';

describe('DepartmentComponent', () => {
  let component: Process_Status_chartComponent;
  let fixture: ComponentFixture<Process_Status_chartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Process_Status_chartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Process_Status_chartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
