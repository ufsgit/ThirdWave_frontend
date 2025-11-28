import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PageCComponent } from './PageC.component';
describe('PageCComponent', () => {
let component: PageCComponent;
let fixture: ComponentFixture<PageCComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ PageCComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(PageCComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

