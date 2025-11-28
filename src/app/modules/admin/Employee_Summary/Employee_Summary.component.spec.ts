import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Employee_SummaryComponent}  from './Employee_Summary.component';
describe('Employee_SummaryComponent', () => {
let component: Employee_SummaryComponent;
let fixture: ComponentFixture<Employee_SummaryComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Employee_SummaryComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Employee_SummaryComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

