import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
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
    id: number;
    btn_title: string = 'Siguiente';
    visible: boolean = false;
    funcion_registrar: boolean = true;

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

    constructor(private fb: FormBuilder, private route: ActivatedRoute) {
        this.tiposDocumento = [
            { name: 'Cédula de ciudadanía', code: 'CC' },
            { name: 'Tarjeta de identidad', code: 'TI' },
            { name: 'Cédula de extranjería', code: 'CE' },
            { name: 'Pasaporte', code: 'PA' },
            { name: 'Registro civil', code: 'RC' },
            { name: 'NIT', code: 'NIT' },
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
            this.id = +params.get('id');
            if (this.id) {
                this.cargarDatosFormulario();
                this.funcion_registrar = false;
            }
        });
    }

    cargarDatosFormulario() {
        this.title = 'Modificación de registro de los datos del propietario';
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
            }
            console.log(this.myForm.value);
        } else {
            console.log('Form not valid');
        }
    }

    abrirModalModificacion() {
        this.visible = true;
    }
}
