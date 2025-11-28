import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Agent_SummaryComponent } from './Agent_Summary.component';
describe('Home_PageComponent', () => {
let component: Agent_SummaryComponent;
let fixture: ComponentFixture<Agent_SummaryComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Agent_SummaryComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Agent_SummaryComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

