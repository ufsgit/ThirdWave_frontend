import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Outgoing_WebhookComponent } from './Outgoing_Webhook.component';
describe('Outgoing_WebhookComponent', () => {
let component: Outgoing_WebhookComponent;
let fixture: ComponentFixture<Outgoing_WebhookComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Outgoing_WebhookComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Outgoing_WebhookComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

