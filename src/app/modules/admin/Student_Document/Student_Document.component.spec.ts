import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Student_DocumentComponent } from './Student_Document.component';
describe('Student_DocumentComponent', () => {
let component: Student_DocumentComponent;
let fixture: ComponentFixture<Student_DocumentComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Student_DocumentComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Student_DocumentComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

