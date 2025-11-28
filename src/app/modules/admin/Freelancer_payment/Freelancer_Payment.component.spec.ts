import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Freelancer_PaymentComponent } from './Freelancer_Payment.component';
describe('Freelancer_DetailsComponent', () => {
let component: Freelancer_PaymentComponent;
let fixture: ComponentFixture<Freelancer_PaymentComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Freelancer_PaymentComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Freelancer_PaymentComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

