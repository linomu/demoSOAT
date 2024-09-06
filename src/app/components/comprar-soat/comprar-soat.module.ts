import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComprarSoatRoutingModule } from './comprar-soat-routing.module';
import { DropdownModule } from 'primeng/dropdown';
import { DividerModule } from 'primeng/divider';
import { ComprarSoatComponent } from './comprar-soat.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@NgModule({
    declarations: [ComprarSoatComponent],
    imports: [
        CommonModule,
        ComprarSoatRoutingModule,
        DropdownModule,
        DividerModule,
        CardModule,
        ButtonModule,
    ],
})
export class ComprarSoatModule {}
