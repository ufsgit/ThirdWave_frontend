import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Student_TaskComponent}  from './Student_Task.component';
describe('Refund_Approval', () => {
let component: Student_TaskComponent;
let fixture: ComponentFixture<Student_TaskComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Student_TaskComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Student_TaskComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

