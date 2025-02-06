import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeDedicatedComponent } from './we-dedicated.component';

describe('WeDedicatedComponent', () => {
  let component: WeDedicatedComponent;
  let fixture: ComponentFixture<WeDedicatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeDedicatedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeDedicatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
