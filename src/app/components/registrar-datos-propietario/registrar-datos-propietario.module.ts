import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { RegistrarDatosPropietarioRoutingModule } from './registrar-datos-propietario-routing.module';
import { RegistrarDatosPropietarioComponent } from './registrar-datos-propietario.component';
import { DialogModule } from 'primeng/dialog';

@NgModule({
    declarations: [RegistrarDatosPropietarioComponent],
    imports: [
        CommonModule,
        FormsModule,
        InputTextModule,
        RegistrarDatosPropietarioRoutingModule,
        DividerModule,
        DropdownModule,
        InputNumberModule,
        ButtonModule,
        ReactiveFormsModule,
        DialogModule,
    ],
})
export class RegistrarDatosPropietarioModule {}
