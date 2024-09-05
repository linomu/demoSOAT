import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConsultarSoatComponent } from './consultar-soat.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: ConsultarSoatComponent },
        ]),
    ],
    exports: [RouterModule],
})
export class ConsultarSoatRoutingModule {}
