import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Level_DetailComponent } from './Level_Detail.component';
describe('Level_DetailComponent', () => {
let component: Level_DetailComponent;
let fixture: ComponentFixture<Level_DetailComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Level_DetailComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Level_DetailComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

