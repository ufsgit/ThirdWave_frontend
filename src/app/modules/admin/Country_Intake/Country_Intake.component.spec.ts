import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Country_IntakeComponent } from './Country_Intake.component';
describe('Country_IntakeComponent', () => {
let component: Country_IntakeComponent;
let fixture: ComponentFixture<Country_IntakeComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Country_IntakeComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Country_IntakeComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

