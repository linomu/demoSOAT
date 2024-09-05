import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarDatosPropietarioComponent } from './registrar-datos-propietario.component';

describe('RegistrarDatosPropietarioComponent', () => {
  let component: RegistrarDatosPropietarioComponent;
  let fixture: ComponentFixture<RegistrarDatosPropietarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarDatosPropietarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarDatosPropietarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
