import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Course_ImportComponent } from './Course_Import.component';
describe('Course_ImportComponent', () => {
let component: Course_ImportComponent;
let fixture: ComponentFixture<Course_ImportComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Course_ImportComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Course_ImportComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

