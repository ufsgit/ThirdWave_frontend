import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Details_checkComponent } from './Details_check.component';

describe('BranchComponent', () => {
  let component: Details_checkComponent;
  let fixture: ComponentFixture<Details_checkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Details_checkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Details_checkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
