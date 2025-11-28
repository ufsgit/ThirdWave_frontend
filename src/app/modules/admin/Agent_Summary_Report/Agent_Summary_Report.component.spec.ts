import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Agent_Summary_ReportComponent}  from './Agent_Summary_Report.component';
describe('Intake_Report', () => {
let component: Agent_Summary_ReportComponent;
let fixture: ComponentFixture<Agent_Summary_ReportComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Agent_Summary_ReportComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Agent_Summary_ReportComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

