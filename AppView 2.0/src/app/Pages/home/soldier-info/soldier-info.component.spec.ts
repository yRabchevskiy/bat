import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldierInfoComponent } from './soldier-info.component';

describe('SoldierInfoComponent', () => {
  let component: SoldierInfoComponent;
  let fixture: ComponentFixture<SoldierInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SoldierInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoldierInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
