import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Refund_ApprovalComponent}  from './Refund_Approval.component';
describe('Refund_Approval', () => {
let component: Refund_ApprovalComponent;
let fixture: ComponentFixture<Refund_ApprovalComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Refund_ApprovalComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Refund_ApprovalComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

