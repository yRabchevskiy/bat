import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemissionTableComponent } from './remission-table.component';

describe('RemissionTableComponent', () => {
  let component: RemissionTableComponent;
  let fixture: ComponentFixture<RemissionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RemissionTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemissionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
