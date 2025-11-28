import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Task_ItemComponent } from './Task_Item.component';
describe('Task_ItemComponent', () => {
let component: Task_ItemComponent;
let fixture: ComponentFixture<Task_ItemComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Task_ItemComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Task_ItemComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});
