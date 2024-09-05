import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrarDatosVehiculoRoutingModule } from './registrar-datos-vehiculo-routing.module';
import { FormsModule } from '@angular/forms';
import { FloatlabelDemoRoutingModule } from 'src/app/demo/components/uikit/floatlabel/floatlabeldemo-routing.module';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { RegistrarDatosVehiculoComponent } from './registrar-datos-vehiculo.component';


@NgModule({
  declarations: [RegistrarDatosVehiculoComponent],
  imports: [
    CommonModule,
		FormsModule,
		FloatlabelDemoRoutingModule,
		AutoCompleteModule,
		CalendarModule,
		ChipsModule,
		DropdownModule,
		InputMaskModule,
		InputNumberModule,
		CascadeSelectModule,
		MultiSelectModule,
		InputTextareaModule,
		InputTextModule,
		InputGroupModule,
		InputGroupAddonModule,
    RegistrarDatosVehiculoRoutingModule
  ]
})
export class RegistrarDatosVehiculoModule { }
