import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Leave_ManagementComponent}  from './Leave_Management.component';
describe('Refund_Approval', () => {
let component: Leave_ManagementComponent;
let fixture: ComponentFixture<Leave_ManagementComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Leave_ManagementComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Leave_ManagementComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

