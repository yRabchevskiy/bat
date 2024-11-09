import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatMapComponent } from './bat-map.component';

describe('BatMapComponent', () => {
  let component: BatMapComponent;
  let fixture: ComponentFixture<BatMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BatMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BatMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
