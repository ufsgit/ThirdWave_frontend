import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Enquiry_ConversionComponent}  from './Enquiry_Conversion.component';
describe('Enquiry_Conversion', () => {
let component: Enquiry_ConversionComponent;
let fixture: ComponentFixture<Enquiry_ConversionComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Enquiry_ConversionComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Enquiry_ConversionComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

