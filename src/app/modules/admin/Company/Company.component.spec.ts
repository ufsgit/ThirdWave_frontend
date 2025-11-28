import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Work_reportComponent } from './Work_report.component';


describe('Work_reportComponent', () => {
  let component: Work_reportComponent;
  let fixture: ComponentFixture<Work_reportComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Work_reportComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Work_reportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
