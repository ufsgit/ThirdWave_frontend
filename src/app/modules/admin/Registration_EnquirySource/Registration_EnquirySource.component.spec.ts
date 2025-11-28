import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Registration_EnquirySourceComponent} from './Registration_EnquirySource.component';
describe('Registration_EnquirySourceComponent', () => {
let component: Registration_EnquirySourceComponent;
let fixture: ComponentFixture<Registration_EnquirySourceComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Registration_EnquirySourceComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Registration_EnquirySourceComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

