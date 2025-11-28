import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Task_TypeComponent } from './Task_Type.component';
describe('Task_TypeComponent', () => {
let component: Task_TypeComponent;
let fixture: ComponentFixture<Task_TypeComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Task_TypeComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Task_TypeComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

