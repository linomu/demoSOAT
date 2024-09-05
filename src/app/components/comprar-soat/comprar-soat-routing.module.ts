import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComprarSoatComponent } from './comprar-soat.component';

@NgModule({
    imports: [
        RouterModule.forChild([{ path: '', component: ComprarSoatComponent }]),
    ],
    exports: [RouterModule],
})
export class ComprarSoatRoutingModule {}
