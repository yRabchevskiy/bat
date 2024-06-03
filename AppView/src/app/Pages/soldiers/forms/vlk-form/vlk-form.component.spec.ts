import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VlkFormComponent } from './vlk-form.component';

describe('VlkFormComponent', () => {
  let component: VlkFormComponent;
  let fixture: ComponentFixture<VlkFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VlkFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VlkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
