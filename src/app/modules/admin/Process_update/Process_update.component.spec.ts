import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Process_updateComponent } from './Process_update.component';
describe('Process_updateComponent', () => {
let component: Process_updateComponent;
let fixture: ComponentFixture<Process_updateComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Process_updateComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Process_updateComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

