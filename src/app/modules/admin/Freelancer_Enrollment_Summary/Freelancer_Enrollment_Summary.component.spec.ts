import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Freelancer_Enrollment_SummaryComponent}  from './Freelancer_Enrollment_Summary.component';
describe('Freelancer_Enrollment_Summary', () => {
let component: Freelancer_Enrollment_SummaryComponent;
let fixture: ComponentFixture<Freelancer_Enrollment_SummaryComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Freelancer_Enrollment_SummaryComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Freelancer_Enrollment_SummaryComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

