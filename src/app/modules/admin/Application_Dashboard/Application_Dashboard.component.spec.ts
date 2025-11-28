import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Application_DashboardComponent } from './Application_Dashboard.component';
describe('Home_PageComponent', () => {
let component: Application_DashboardComponent;
let fixture: ComponentFixture<Application_DashboardComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Application_DashboardComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Application_DashboardComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

