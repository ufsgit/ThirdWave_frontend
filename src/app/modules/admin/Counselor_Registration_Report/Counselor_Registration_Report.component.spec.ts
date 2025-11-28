import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Counselor_Registration_ReportComponent} from './Counselor_Registration_Report.component';
describe('Home_PageComponent', () => {
let component: Counselor_Registration_ReportComponent;
let fixture: ComponentFixture<Counselor_Registration_ReportComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Counselor_Registration_ReportComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Counselor_Registration_ReportComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

