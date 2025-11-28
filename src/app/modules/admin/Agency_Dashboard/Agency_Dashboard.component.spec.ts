import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Agency_DashboardComponent } from './Agency_Dashboard.component';
describe('Home_PageComponent', () => {
let component: Agency_DashboardComponent;
let fixture: ComponentFixture<Agency_DashboardComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Agency_DashboardComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Agency_DashboardComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

