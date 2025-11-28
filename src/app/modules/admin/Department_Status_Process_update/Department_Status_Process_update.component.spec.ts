import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Department_Status_Process_updateComponent } from './Department_Status_Process_update.component';
describe('Department_Status_Process_updateComponent', () => {
let component: Department_Status_Process_updateComponent;
let fixture: ComponentFixture<Department_Status_Process_updateComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Department_Status_Process_updateComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Department_Status_Process_updateComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

