import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Freelancer_Summary_ReportComponent}  from './Freelancer_Summary_Report.component';
describe('Intake_Report', () => {
let component: Freelancer_Summary_ReportComponent;
let fixture: ComponentFixture<Freelancer_Summary_ReportComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Freelancer_Summary_ReportComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Freelancer_Summary_ReportComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

