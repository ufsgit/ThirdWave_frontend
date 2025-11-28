import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Registration_Summary_AgentComponent} from './Registration_Summary_Agent.component';
describe('Home_PageComponent', () => {
let component: Registration_Summary_AgentComponent;
let fixture: ComponentFixture<Registration_Summary_AgentComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Registration_Summary_AgentComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Registration_Summary_AgentComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

