import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarSoatComponent } from './consultar-soat.component';

describe('ConsultarSoatComponent', () => {
  let component: ConsultarSoatComponent;
  let fixture: ComponentFixture<ConsultarSoatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarSoatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultarSoatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
