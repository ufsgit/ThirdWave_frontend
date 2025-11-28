import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Data_FieldsComponent } from './Data_Fields.component';
describe('Data_FieldsComponent', () => {
let component: Data_FieldsComponent;
let fixture: ComponentFixture<Data_FieldsComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Data_FieldsComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Data_FieldsComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});