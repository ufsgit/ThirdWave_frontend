import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Intake_ReportComponent}  from './Intake_Report.component';
describe('Intake_Report', () => {
let component: Intake_ReportComponent;
let fixture: ComponentFixture<Intake_ReportComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Intake_ReportComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Intake_ReportComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

