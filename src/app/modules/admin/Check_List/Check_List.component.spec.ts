import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Check_ListComponent } from './Check_List.component';

describe('Check_ListComponent', () => {
  let component: Check_ListComponent;
  let fixture: ComponentFixture<Check_ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Check_ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Check_ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
