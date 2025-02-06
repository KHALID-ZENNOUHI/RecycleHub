import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadingWasteComponent } from './leading-waste.component';

describe('LeadingWasteComponent', () => {
  let component: LeadingWasteComponent;
  let fixture: ComponentFixture<LeadingWasteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadingWasteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeadingWasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
