import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontBtnComponent } from './font-btn.component';

describe('FontBtnComponent', () => {
  let component: FontBtnComponent;
  let fixture: ComponentFixture<FontBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FontBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FontBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
