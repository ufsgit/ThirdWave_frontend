import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Course_IntakeComponent } from './Course_Intake.component';
describe('Course_IntakeComponent', () => {
let component: Course_IntakeComponent;
let fixture: ComponentFixture<Course_IntakeComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Course_IntakeComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Course_IntakeComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

