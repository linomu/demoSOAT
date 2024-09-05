import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-terminos-condiciones',
    templateUrl: './terminos-condiciones.component.html',
    styleUrl: './terminos-condiciones.component.scss',
})
export class TerminosCondicionesComponent {
    constructor(private router: Router) {}
    navegarAInicio() {
        this.router.navigate(['/soat/']);
    }
}
