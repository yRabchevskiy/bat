import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldiersTableComponent } from './soldiers-table.component';

describe('SoldiersTableComponent', () => {
  let component: SoldiersTableComponent;
  let fixture: ComponentFixture<SoldiersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SoldiersTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoldiersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
