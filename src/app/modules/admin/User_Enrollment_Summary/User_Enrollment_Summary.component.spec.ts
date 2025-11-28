import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {User_Enrollment_SummaryComponent}  from './User_Enrollment_Summary.component';
describe('User_Enrollment_Summary', () => {
let component: User_Enrollment_SummaryComponent;
let fixture: ComponentFixture<User_Enrollment_SummaryComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ User_Enrollment_SummaryComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(User_Enrollment_SummaryComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

