import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Fees_Pending_ReportComponent}  from './Fees_Pending_Report.component';
describe('Fees_Pending_Report', () => {
let component: Fees_Pending_ReportComponent;
let fixture: ComponentFixture<Fees_Pending_ReportComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Fees_Pending_ReportComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Fees_Pending_ReportComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

