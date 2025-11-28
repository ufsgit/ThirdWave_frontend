import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Student_MessageComponent } from './Student_Message.component';
describe('Student_MessageComponent', () => {
let component: Student_MessageComponent;
let fixture: ComponentFixture<Student_MessageComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Student_MessageComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Student_MessageComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

