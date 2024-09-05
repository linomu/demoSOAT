import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegistrarDatosVehiculoComponent } from './registrar-datos-vehiculo.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: RegistrarDatosVehiculoComponent },
        ]),
    ],
    exports: [RouterModule],
})
export class RegistrarDatosVehiculoRoutingModule {}
