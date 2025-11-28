import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Registration_SummaryComponent} from './Registration_Summary.component';
describe('Home_PageComponent', () => {
let component: Registration_SummaryComponent;
let fixture: ComponentFixture<Registration_SummaryComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Registration_SummaryComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Registration_SummaryComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

