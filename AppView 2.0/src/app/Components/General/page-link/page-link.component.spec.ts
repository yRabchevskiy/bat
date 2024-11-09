import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLinkComponent } from './page-link.component';

describe('PageLinkComponent', () => {
  let component: PageLinkComponent;
  let fixture: ComponentFixture<PageLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageLinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
