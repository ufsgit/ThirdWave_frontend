import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Freelancer_DashboardComponent } from './Freelancer_Dashboard.component';
describe('Home_PageComponent', () => {
let component: Freelancer_DashboardComponent;
let fixture: ComponentFixture<Freelancer_DashboardComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Freelancer_DashboardComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Freelancer_DashboardComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

