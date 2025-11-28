import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Agent_Enrollment_SummaryComponent}  from './Agent_Enrollment_Summary.component';
describe('Agent_Enrollment_Summary', () => {
let component: Agent_Enrollment_SummaryComponent;
let fixture: ComponentFixture<Agent_Enrollment_SummaryComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Agent_Enrollment_SummaryComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Agent_Enrollment_SummaryComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

