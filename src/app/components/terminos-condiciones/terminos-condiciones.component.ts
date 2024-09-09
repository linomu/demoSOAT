import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { RCService } from 'src/app/services/app.rc.service';

@Component({
    selector: 'app-terminos-condiciones',
    templateUrl: './terminos-condiciones.component.html',
    styleUrl: './terminos-condiciones.component.scss',
})
export class TerminosCondicionesComponent {
    constructor(private router: Router,
        private recaptchaService: RCService,
    ) { }
    estadoRecaptcha = false;

    navegarAInicio() {
        this.router.navigate(['/soat/']);

    }
    marcarCheck() {
        this.estadoRecaptcha = !this.estadoRecaptcha;
    }
    nombre: string;
    email: string;
    recaptchaResponse: string;

    resolved(captchaResponse: string) {
        
        this.recaptchaResponse = captchaResponse;
        let rs = this.recaptchaService.verifyToken(captchaResponse);
        rs.subscribe({
            next: (v) => {                
                // alert(v.success);
                if(v.success){
                    this.estadoRecaptcha=true;
                }else{
                   this.estadoRecaptcha=false;
                   alert('Prueba recaptcha no superada');
                }
            },
            error: (e) => console.error(e),
            complete: () => console.info('complete')
        }
        ); 
    }

}
