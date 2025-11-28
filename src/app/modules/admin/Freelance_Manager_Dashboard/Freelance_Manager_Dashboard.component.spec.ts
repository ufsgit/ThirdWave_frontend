import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Freelance_Manager_DashboardComponent } from './Freelance_Manager_Dashboard.component';
describe('Home_PageComponent', () => {
let component: Freelance_Manager_DashboardComponent;
let fixture: ComponentFixture<Freelance_Manager_DashboardComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Freelance_Manager_DashboardComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Freelance_Manager_DashboardComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

