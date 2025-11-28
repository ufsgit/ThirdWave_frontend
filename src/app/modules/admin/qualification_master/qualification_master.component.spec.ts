import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { qualification_masterComponent } from './qualification_master.component';
describe('qualification_masterComponent', () => {
let component: qualification_masterComponent;
let fixture: ComponentFixture<qualification_masterComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ qualification_masterComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(qualification_masterComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});