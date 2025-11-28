import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Student_SearchComponent } from './Student_Search.component';


describe('Student_SearchComponent', () => {
  let component: Student_SearchComponent;
  let fixture: ComponentFixture<Student_SearchComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Student_SearchComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Student_SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
