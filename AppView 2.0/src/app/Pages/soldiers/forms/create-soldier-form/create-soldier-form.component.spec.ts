import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateSoldierFormComponent } from './create-update-soldier-form.component';

describe('CreateUpdateSoldierFormComponent', () => {
  let component: CreateUpdateSoldierFormComponent;
  let fixture: ComponentFixture<CreateUpdateSoldierFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateUpdateSoldierFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateUpdateSoldierFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
