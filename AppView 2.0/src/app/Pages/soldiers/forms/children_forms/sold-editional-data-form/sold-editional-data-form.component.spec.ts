import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldEditionalDataFormComponent } from './sold-editional-data-form.component';

describe('SoldEditionalDataFormComponent', () => {
  let component: SoldEditionalDataFormComponent;
  let fixture: ComponentFixture<SoldEditionalDataFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SoldEditionalDataFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoldEditionalDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
