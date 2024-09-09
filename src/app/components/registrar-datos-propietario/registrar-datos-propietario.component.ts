import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CountryService } from 'src/app/demo/service/country.service';

@Component({
    selector: 'app-registrar-datos-propietario',
    templateUrl: './registrar-datos-propietario.component.html',
    styleUrl: './registrar-datos-propietario.component.scss',
})
export class RegistrarDatosPropietarioComponent {
    tiposDocumento: any[];
    tipoDocumento: any;
    title: string;
    numeroDocumento: string;
    tipoDocumentoC: string;
    placa: string;
    pais: string;
    id: number;
    btn_title: string = 'Siguiente';
    visible: boolean = false;
    funcion_registrar: boolean = true;
    countries: any[] = [];
    filteredCountries: any[] = [];
    estadoRecaptcha = false;
    isVisible = false;
    recaptchaResponse: string;
    visibleModificar: boolean = false;

    myForm: FormGroup;

    usuario1: {
        tipoDocumento: { name: string; code: string };
        numeroDocumento: number;
        nombres: string;
        primerApellido: string;
        segundoApellido: string;
        numeroTarjeta: number;
        correo: string;
    } = {
        tipoDocumento: { name: 'Cédula de ciudadanía', code: 'CC' },
        numeroDocumento: 10881,
        nombres: 'Carlos',
        primerApellido: 'Raba',
        segundoApellido: 'Baquero',
        numeroTarjeta: 10881,
        correo: 'raba@prueba.co',
    };

    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private countryService: CountryService
    ) {
        this.tiposDocumento = [
            { name: 'Cédula de ciudadanía', code: 'CC' },
            { name: 'Tarjeta de identidad', code: 'TI' },
            { name: 'Cédula de extranjería', code: 'CE' },
            { name: 'Pasaporte', code: 'PA' },
            { name: 'Registro civil', code: 'RC' },
            { name: 'NIT', code: 'NIT' },
            { name: 'Permiso Protección Temportal', code: 'PPT' },
        ];

        this.title = 'Inscripción de registro de los datos del propietario';
    }

    ngOnInit() {
        this.myForm = this.fb.group({
            tipoDocumento: [null, Validators.required],
            numeroDocumento: [null, [Validators.required, Validators.min(1)]],
            nombres: ['', Validators.required],
            primerApellido: ['', Validators.required],
            segundoApellido: ['', Validators.required],
            numeroTarjeta: [null, [Validators.required, Validators.min(1)]],
            correo: ['', [Validators.required, Validators.email]],
        });

        this.route.paramMap.subscribe((params: ParamMap) => {
            console.log(params);

            this.id = +params.get('id');
            if (this.id) {
                this.cargarDatosFormulario();
                this.funcion_registrar = false;
            }
        });

        this.countryService.getCountries().then((countries) => {
            this.countries = countries;
        });
    }

    cargarDatosFormulario() {
        this.visibleModificar = true;
        this.title = 'Datos del Propietario';
        this.btn_title = 'Modificar';
        this.myForm.patchValue({
            tipoDocumento: this.usuario1.tipoDocumento,
            numeroDocumento: this.usuario1.numeroDocumento,
            nombres: this.usuario1.nombres,
            primerApellido: this.usuario1.primerApellido,
            segundoApellido: this.usuario1.segundoApellido,
            numeroTarjeta: this.usuario1.numeroTarjeta,
            correo: this.usuario1.correo,
        });
    }

    onSubmit() {
        if (this.myForm.valid) {
            if (!this.funcion_registrar) {
                this.abrirModalModificacion();
            } else {
                this.router.navigate(['/soat/comprar-soat']);
            }
        } else {
            this.myForm.markAllAsTouched();
        }
    }

    abrirModalModificacion() {
        this.visible = true;
    }

    searchCountry(event: any) {
        // in a real application, make a request to a remote url with the query and
        // return filtered results, for demo we filter at client side
        const filtered: any[] = [];
        const query = event.query;
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.countries.length; i++) {
            const country = this.countries[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }

        this.filteredCountries = filtered;
    }

    marcarCheck() {
        this.estadoRecaptcha = !this.estadoRecaptcha;
        if (this.estadoRecaptcha) {
            this.isVisible = false;
        }
    }

    resolved(captchaResponse: string) {
        this.marcarCheck();
        this.recaptchaResponse = captchaResponse;
    }

    cancelarBusqueda() {
        this.visible = false;
        this.router.navigate(['/soat']);
    }

    consultarPropietario() {
        this.visibleModificar = false;
    }

    volver() {
        this.router.navigate(['/soat']);
    }
}
