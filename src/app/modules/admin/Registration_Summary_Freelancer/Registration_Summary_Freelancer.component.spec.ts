import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Registration_Summary_FreelancerComponent} from './Registration_Summary_Freelancer.component';
describe('Home_PageComponent', () => {
let component: Registration_Summary_FreelancerComponent;
let fixture: ComponentFixture<Registration_Summary_FreelancerComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Registration_Summary_FreelancerComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Registration_Summary_FreelancerComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

