
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TerminosCondicionesRoutingModule } from './terminos-condiciones-routing.module';
import { TerminosCondicionesComponent } from './terminos-condiciones.component';
import { FooterModule } from '../footer/footer.module';
import { ButtonModule } from 'primeng/button';



@NgModule({
    declarations: [TerminosCondicionesComponent,],
    imports: [TerminosCondicionesRoutingModule, FooterModule,CommonModule,ButtonModule],
})
export class TerminosCondicionesModule {}
