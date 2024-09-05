import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarSoatComponent } from './comprar-soat.component';

describe('ComprarSoatComponent', () => {
  let component: ComprarSoatComponent;
  let fixture: ComponentFixture<ComprarSoatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComprarSoatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComprarSoatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
