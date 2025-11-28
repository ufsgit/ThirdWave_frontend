import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Course_SearchComponent } from './Course_Search.component';


describe('Course_SearchComponent', () => {
  let component: Course_SearchComponent;
  let fixture: ComponentFixture<Course_SearchComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Course_SearchComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Course_SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
