import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Application_StatusComponent } from './Application_Status.component';
describe('Enquiry_SourceComponent', () => {
let component: Application_StatusComponent;
let fixture: ComponentFixture<Application_StatusComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Application_StatusComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Application_StatusComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});
