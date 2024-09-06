import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CountryService } from 'src/app/demo/service/country.service';

@Component({
    selector: 'app-registrar-datos-vehiculo',
    templateUrl: './registrar-datos-vehiculo.component.html',
    styleUrl: './registrar-datos-vehiculo.component.scss'
})
export class RegistrarDatosVehiculoComponent implements OnInit {
    countries: any[] = [];

    cities: any[];

    filteredCountries: any[] = [];

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

    constructor(private countryService: CountryService, private route: ActivatedRoute) {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }

    ngOnInit() {

        this.route.paramMap.subscribe((params: ParamMap) => {
            this.id = +params.get('id');
            if(this.id){
                this.abrirModalConsulta();
            }
        });

        this.countryService.getCountries().then(countries => {
            this.countries = countries;
        });
    }

    abrirModalConsulta(){
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
}
