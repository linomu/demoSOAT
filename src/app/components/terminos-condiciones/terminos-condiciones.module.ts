
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TerminosCondicionesRoutingModule } from './terminos-condiciones-routing.module';
import { TerminosCondicionesComponent } from './terminos-condiciones.component';
import { FooterModule } from '../footer/footer.module';



@NgModule({
    declarations: [TerminosCondicionesComponent,],
    imports: [TerminosCondicionesRoutingModule, FooterModule],
})
export class TerminosCondicionesModule {}
