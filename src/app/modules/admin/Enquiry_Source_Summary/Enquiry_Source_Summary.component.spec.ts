import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Enquiry_Source_SummaryComponent } from './Enquiry_Source_Summary.component';
describe('Home_PageComponent', () => {
let component: Enquiry_Source_SummaryComponent;
let fixture: ComponentFixture<Enquiry_Source_SummaryComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Enquiry_Source_SummaryComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Enquiry_Source_SummaryComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

