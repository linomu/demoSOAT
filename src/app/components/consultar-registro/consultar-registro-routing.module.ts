import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConsultarRegistroComponent } from './consultar-registro.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: ConsultarRegistroComponent },
        ])
    ],
    exports: [RouterModule],
})
export class ConsultarRegistroRoutingModule{
    

}
