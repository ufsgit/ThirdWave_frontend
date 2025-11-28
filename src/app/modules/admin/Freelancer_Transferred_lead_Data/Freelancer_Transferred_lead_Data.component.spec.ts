import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Freelancer_Transferred_lead_DataComponent } from './Freelancer_Transferred_lead_Data.component';


describe('Freelancer_Transferred_lead_DataComponent', () => {
  let component: Freelancer_Transferred_lead_DataComponent;
  let fixture: ComponentFixture<Freelancer_Transferred_lead_DataComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Freelancer_Transferred_lead_DataComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Freelancer_Transferred_lead_DataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
