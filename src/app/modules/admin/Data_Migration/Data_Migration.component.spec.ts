import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Data_MigrationComponent } from './Data_Migration.component';
describe('Data_MigrationComponent', () => {
let component: Data_MigrationComponent;
let fixture: ComponentFixture<Data_MigrationComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Data_MigrationComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Data_MigrationComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

