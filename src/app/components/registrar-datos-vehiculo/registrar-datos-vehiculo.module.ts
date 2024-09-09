import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrarDatosVehiculoRoutingModule } from './registrar-datos-vehiculo-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { DividerModule } from 'primeng/divider';
import { DialogModule } from 'primeng/dialog';
import { RegistrarDatosVehiculoComponent } from './registrar-datos-vehiculo.component';
import { RecaptchaModule } from 'ng-recaptcha';

@NgModule({
    declarations: [RegistrarDatosVehiculoComponent],
    imports: [
        CommonModule,
        FormsModule,
        AutoCompleteModule,
        CalendarModule,
        ChipsModule,
        DropdownModule,
        DialogModule,
        InputMaskModule,
        InputNumberModule,
        CascadeSelectModule,
        MultiSelectModule,
        InputTextareaModule,
        InputTextModule,
        InputGroupModule,
        InputGroupAddonModule,
        DividerModule,
        RegistrarDatosVehiculoRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        RecaptchaModule,
    ],
})
export class RegistrarDatosVehiculoModule {}
