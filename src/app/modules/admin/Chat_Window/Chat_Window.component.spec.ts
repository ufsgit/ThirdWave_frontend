import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chat_WindowComponent } from './Chat_Window.component';

describe('Chat_WindowComponent', () => {
  let component: Chat_WindowComponent;
  let fixture: ComponentFixture<Chat_WindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chat_WindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chat_WindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
