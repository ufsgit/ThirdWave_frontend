import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Change_UsernameComponent } from './Change_Username.component';
describe('Change_UsernameComponent', () => {
let component: Change_UsernameComponent;
let fixture: ComponentFixture<Change_UsernameComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Change_UsernameComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Change_UsernameComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

