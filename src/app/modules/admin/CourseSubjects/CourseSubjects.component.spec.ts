import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseSubjectsComponent } from './CourseSubjects.component';
describe('CourseSubjectsComponent', () => {
let component: CourseSubjectsComponent;
let fixture: ComponentFixture<CourseSubjectsComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ CourseSubjectsComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(CourseSubjectsComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});