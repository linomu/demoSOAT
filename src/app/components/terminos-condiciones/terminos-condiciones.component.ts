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
    isVisible=false;
    navegarAInicio() {
        if (!this.estadoRecaptcha) {
            this.isVisible=true;
            // alert('Debes aceptar los terminos y condiciones');
        } else {
            this.router.navigate(['/soat/']);
            this.isVisible=false;
        }

    }
    marcarCheck() {
        this.estadoRecaptcha=!this.estadoRecaptcha; 
        if(this.estadoRecaptcha){this.isVisible=false;}    
    }
}
