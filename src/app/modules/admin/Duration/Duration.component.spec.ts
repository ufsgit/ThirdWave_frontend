import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DurationComponent } from './Duration.component';
describe('DurationComponent', () => {
let component: DurationComponent;
let fixture: ComponentFixture<DurationComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ DurationComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(DurationComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

