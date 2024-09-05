import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarRegistroComponent } from './consultar-registro.component';

describe('ConsultarRegistroComponent', () => {
  let component: ConsultarRegistroComponent;
  let fixture: ComponentFixture<ConsultarRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarRegistroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultarRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
