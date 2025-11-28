import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Receipt_ConfirmationComponent}  from './Receipt_Confirmation.component';
describe('Receipt_Confirmation', () => {
let component: Receipt_ConfirmationComponent;
let fixture: ComponentFixture<Receipt_ConfirmationComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Receipt_ConfirmationComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Receipt_ConfirmationComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

