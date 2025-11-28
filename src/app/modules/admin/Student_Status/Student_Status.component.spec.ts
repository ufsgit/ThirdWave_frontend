import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Student_StatusComponent } from './Student_Status.component';
describe('Student_StatusComponent', () => {
let component: Student_StatusComponent;
let fixture: ComponentFixture<Student_StatusComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Student_StatusComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Student_StatusComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

