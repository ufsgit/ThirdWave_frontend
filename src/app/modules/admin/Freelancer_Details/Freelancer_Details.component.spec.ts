import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Freelancer_DetailsComponent } from './Freelancer_Details.component';
describe('Freelancer_DetailsComponent', () => {
let component: Freelancer_DetailsComponent;
let fixture: ComponentFixture<Freelancer_DetailsComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Freelancer_DetailsComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Freelancer_DetailsComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

