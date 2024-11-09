import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureItemFormComponent } from './structure-item-form.component';

describe('StructureItemFormComponent', () => {
  let component: StructureItemFormComponent;
  let fixture: ComponentFixture<StructureItemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StructureItemFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StructureItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
