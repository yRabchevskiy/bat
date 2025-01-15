import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VlkComponent } from './vlk.component';

describe('VlkComponent', () => {
  let component: VlkComponent;
  let fixture: ComponentFixture<VlkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VlkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VlkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
