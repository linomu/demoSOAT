
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CountryService } from 'src/app/demo/service/country.service';
import { MarcaVehiculoService } from 'src/app/demo/service/marca-vehiculo.service';
import { VehiculoService } from 'src/app/services/vehiculo.service';
import { numeroVinVehiculoValidationAsync } from 'src/app/utils/validators/form-vehiculo-numero-vin';
import { placaVehiculoValidationAsync } from 'src/app/utils/validators/form-vehiculo-placa';

@Component({
  selector: 'app-consultar-registro',
  templateUrl: './consultar-registro.component.html',
  styleUrl: './consultar-registro.component.scss'
})
export class ConsultarRegistroComponent implements OnInit {

  countries: any[] = [];
  marcaVehiculos: any[] = [];

  tiposDocumento: any[];
  claseVehiculos: any[];
  tipoServicios: any[];
  tipoCarrocerias: any[];
  tipoCombustibles: any[];
  tipoRadioOperaciones: any[];

  filteredCountries: any[] = [];
  filteredMarcaVehiculos: any[] = [];

  formularioCrear: boolean = true;
  dialogoPDF: boolean = false;
  datosSoat: boolean = true;

  estadoRecaptcha = false;
  isVisible = false;

  value1: any;

  value2: any;

  value3: any;

  value4: any;

  value5: any;

  value6: any;

  value7: any;

  value8: any;

  value9: any;

  value10: any;

  value11: any;

  value12: any;

  id: number;

  visible: boolean = false;

  constructor(
    private countryService: CountryService,
    private marcaVehiculoService: MarcaVehiculoService,
    private route: ActivatedRoute,
    private vehiculoService: VehiculoService,
    private router: Router) {
    this.tiposDocumento = [
      { name: 'Cédula de ciudadanía', code: 'CC' },
      { name: 'Tarjeta de identidad', code: 'TI' },
      { name: 'Cédula de extranjería', code: 'CE' },
      { name: 'Pasaporte', code: 'PA' },
      { name: 'Registro civil', code: 'RC' },
      { name: 'NIT', code: 'NIT' },
      { name: 'Permiso Protección Temportal', code: 'PPT' },
    ];
    this.claseVehiculos = [
      { name: 'Motocicleta', code: 'mot' },
      { name: 'Camioneta', code: 'cam' },
      { name: 'Automovil', code: 'aut' },
      { name: 'Buseta', code: 'bus' },
    ];
    this.tipoServicios = [
      { name: 'Publico', code: 'pub' },
      { name: 'Particular', code: 'par' },
    ];
    this.tipoCarrocerias = [
      { name: 'Sedán', code: 'sed' },
      { name: 'Hatchback', code: 'hat' },
      { name: 'Suv', code: 'suv' },
      { name: 'Crossover', code: 'cro' },
      { name: 'Coupe', code: 'cou' },
    ];
    this.tipoCombustibles = [
      { name: 'Gasolina', code: 'gas' },
      { name: 'ACPM', code: 'acpm' },
    ]
    this.tipoRadioOperaciones = [
      { name: 'Urbano', code: 'urb' },
      { name: 'Rural', code: 'rur' },
    ];

  }

  formVehiculo = new FormGroup({
    placa: new FormControl(null, [Validators.required], [placaVehiculoValidationAsync(this.vehiculoService)]),
    pais: new FormControl(null, [Validators.required]),
    marca: new FormControl(null, [Validators.required]),
    modelo: new FormControl(null,),
    numeroVin: new FormControl(null, [Validators.required], [numeroVinVehiculoValidationAsync(this.vehiculoService)]),
    numeroMotor: new FormControl(null, [Validators.required]),
    numeroChasis: new FormControl(null,),
    numeroSerie: new FormControl(null,),
    cilindraje: new FormControl(null,),
    claseVehiculo: new FormControl(null, [Validators.required]),
    capacidadPasajeros: new FormControl(null,),
    capacidadPasajerosSentados: new FormControl(null,),
    capacidadCarga: new FormControl(null,),
    tipoServicio: new FormControl(null, [Validators.required]),
    tipoCarroceria: new FormControl(null, [Validators.required]),
    tipoCombustible: new FormControl(null,),
    tipoRadioOperacion: new FormControl(null,),
  }, []);

  ngOnInit() {
    this.abrirModalConsulta();
    this.formularioCrear = false;
    this.datosSoat = false;
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id');
      if (this.id) {
        this.formularioCrear = false;

      }
    });

    this.countryService.getCountries().then(countries => {
      this.countries = countries;
    });

    this.marcaVehiculoService.getMarcaVehiculos().then(marcas => {
      this.marcaVehiculos = marcas;
    })

  }
  regresar() {
    this.consultarVehiculo();
    this.datosSoat = false;
    this.formularioCrear = true;

  }
  generarPDF() {
    this.dialogoPDF = true;
  }

  abrirModalConsulta() {
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

  searchMarcaVehiculos(event: any) {
    // in a real application, make a request to a remote url with the query and
    // return filtered results, for demo we filter at client side
    const filtered: any[] = [];
    const query = event.query;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.marcaVehiculos.length; i++) {
      const marca = this.marcaVehiculos[i];
      if (marca.nombre.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(marca);
      }
    }

    this.filteredMarcaVehiculos = filtered;
  }

  consultarVehiculo() {
    this.visible = false;
    this.formularioCrear = true;
    this.placaControl.setValue('LOI123');
    this.paisControl.setValue({ "name": "Colombia", "code": "CO" });
    this.marcaControl.setValue(this.marcaVehiculos[0]);
    this.modeloControl.setValue(2012);
    this.numberoVinControl.setValue('147852369');
    this.numeroMotorControl.setValue('123456897');
    this.numeroChasisControl.setValue('23354351');
    this.numeroSerieControl.setValue('1551513');
    this.cilindrajeControl.setValue('1400');
    this.claseVehiculoControl.setValue(this.claseVehiculos[1]);
    this.capacidadPasajerosControl.setValue(4);
    this.capacidadPasajerosSentadosControl.setValue(5);
    this.capacidadCarga.setValue(1000);
    this.tipoServicioControl.setValue(this.tipoServicios[1]);
    this.tipoCarroceriaControl.setValue(this.tipoCarrocerias[0]);
    this.tipoCombustible.setValue(this.tipoCombustibles[0]);
    this.tipoRadioOperacion.setValue(this.tipoRadioOperaciones[0]);
    this.formVehiculo.disable();
  }

  actualizarVehiculo() {
    this.dialogoPDF = true;
  }

  crearVehiculo() {
    this.router.navigate(['/soat/registrar-datos-propietario']);
  }

  cancelarBusqueda() {
    this.visible = false;
    this.router.navigate(['/soat']);
  }

  aceptarActualizacion() {
    this.dialogoPDF = false;
    this.router.navigate(['/soat']);
  }

  marcarCheck() {
    this.estadoRecaptcha = !this.estadoRecaptcha;
    if (this.estadoRecaptcha) { this.isVisible = false; }
  }


  get placaControl(): FormControl {
    return this.formVehiculo.get('placa') as FormControl;
  }

  get paisControl(): FormControl {
    return this.formVehiculo.get('pais') as FormControl;
  }

  get marcaControl(): FormControl {
    return this.formVehiculo.get('marca') as FormControl;
  }

  get modeloControl(): FormControl {
    return this.formVehiculo.get('modelo') as FormControl;
  }

  get numberoVinControl(): FormControl {
    return this.formVehiculo.get('numeroVin') as FormControl;
  }

  get numeroMotorControl(): FormControl {
    return this.formVehiculo.get('numeroMotor') as FormControl;
  }

  get numeroChasisControl(): FormControl {
    return this.formVehiculo.get('numeroChasis') as FormControl;
  }

  get numeroSerieControl(): FormControl {
    return this.formVehiculo.get('numeroSerie') as FormControl;
  }

  get cilindrajeControl(): FormControl {
    return this.formVehiculo.get('cilindraje') as FormControl;
  }

  get claseVehiculoControl(): FormControl {
    return this.formVehiculo.get('claseVehiculo') as FormControl;
  }

  get capacidadPasajerosControl(): FormControl {
    return this.formVehiculo.get('capacidadPasajeros') as FormControl;
  }

  get capacidadPasajerosSentadosControl(): FormControl {
    return this.formVehiculo.get('capacidadPasajerosSentados') as FormControl;
  }
  get capacidadCarga(): FormControl {
    return this.formVehiculo.get('capacidadCarga') as FormControl;
  }


  get tipoServicioControl(): FormControl {
    return this.formVehiculo.get('tipoServicio') as FormControl;
  }

  get tipoCarroceriaControl(): FormControl {
    return this.formVehiculo.get('tipoCarroceria') as FormControl;
  }
  get tipoCombustible(): FormControl {
    return this.formVehiculo.get('tipoCombustible') as FormControl;
  }
  get tipoRadioOperacion(): FormControl {
    return this.formVehiculo.get('tipoRadioOperacion') as FormControl;
  }

  mostrarTabla() {
    this.formularioCrear = false;
    this.datosSoat = true;
  }
  nombre: string;
  email: string;
  recaptchaResponse: string;

  resolved(captchaResponse: string) {
    this.marcarCheck();
    this.recaptchaResponse = captchaResponse;
    console.log(`Resolved captcha with response: ${this.recaptchaResponse}`);

  }
}
