import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TerminosCondicionesComponent } from './terminos-condiciones.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: TerminosCondicionesComponent },
        ]),
    ],
    exports: [RouterModule],
})
export class TerminosCondicionesRoutingModule {}
