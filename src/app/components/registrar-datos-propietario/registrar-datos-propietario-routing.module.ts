import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegistrarDatosPropietarioComponent } from './registrar-datos-propietario.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: RegistrarDatosPropietarioComponent },
        ]),
    ],
    exports: [RouterModule],
})
export class RegistrarDatosPropietarioRoutingModule {}
