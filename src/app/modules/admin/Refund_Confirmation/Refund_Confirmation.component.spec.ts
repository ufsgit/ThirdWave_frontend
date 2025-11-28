import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Refund_ConfirmationComponent}  from './Refund_Confirmation.component';
describe('Refund_Confirmation', () => {
let component: Refund_ConfirmationComponent;
let fixture: ComponentFixture<Refund_ConfirmationComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Refund_ConfirmationComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Refund_ConfirmationComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

