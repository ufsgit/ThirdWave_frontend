import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DocumentNameComponent } from './DocumentName.component';
describe('DocumentNameComponent', () => {
let component: DocumentNameComponent;
let fixture: ComponentFixture<DocumentNameComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ DocumentNameComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(DocumentNameComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});