import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';

@Component({
    selector: 'app-terminos-condiciones',
    templateUrl: './terminos-condiciones.component.html',
    styleUrl: './terminos-condiciones.component.scss',
})
export class TerminosCondicionesComponent {
    constructor(private router: Router) { }
    estadoRecaptcha = false;
   
    navegarAInicio() {      
            this.router.navigate(['/soat/']);     

    }
    marcarCheck() {
        this.estadoRecaptcha=!this.estadoRecaptcha;          
    }
}
