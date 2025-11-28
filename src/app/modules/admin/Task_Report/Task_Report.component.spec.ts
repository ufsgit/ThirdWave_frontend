import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Task_ReportComponent}  from './Task_Report.component';
describe('Refund_Approval', () => {
let component: Task_ReportComponent;
let fixture: ComponentFixture<Task_ReportComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Task_ReportComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Task_ReportComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

