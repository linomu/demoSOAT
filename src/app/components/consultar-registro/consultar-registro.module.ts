import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultarRegistroRoutingModule } from './consultar-registro-routing.module';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ConsultarRegistroComponent } from './consultar-registro.component';
import { DividerModule } from 'primeng/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ChipsModule } from 'primeng/chips';
import { DropdownModule } from 'primeng/dropdown';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { RecaptchaModule } from 'ng-recaptcha';

@NgModule({
    declarations: [ConsultarRegistroComponent],
    imports: [CommonModule,
        ConsultarRegistroRoutingModule,
        DialogModule,
        ButtonModule,
        DividerModule,
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
		FormsModule,
		ReactiveFormsModule,RecaptchaModule],
})
export class ConsultarRegistroModule { }
