import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TimeTrackComponent } from './TimeTrack.component';
describe('Home_PageComponent', () => {
let component: TimeTrackComponent;
let fixture: ComponentFixture<TimeTrackComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ TimeTrackComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(TimeTrackComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

