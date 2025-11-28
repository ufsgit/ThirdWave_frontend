import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Work_HistoryComponent}  from './Work_History.component';
describe('Work_HistoryComponent', () => {
let component: Work_HistoryComponent;
let fixture: ComponentFixture<Work_HistoryComponent>;
beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ Work_HistoryComponent ]
})
.compileComponents();
}));
beforeEach(() => {
fixture = TestBed.createComponent(Work_HistoryComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});
it('should create', () => {
expect(component).toBeTruthy();
});
});

