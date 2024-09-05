import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarDatosVehiculoComponent } from './registrar-datos-vehiculo.component';

describe('RegistrarDatosVehiculoComponent', () => {
  let component: RegistrarDatosVehiculoComponent;
  let fixture: ComponentFixture<RegistrarDatosVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarDatosVehiculoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarDatosVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
