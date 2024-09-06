import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class MarcaVehiculoService {

    constructor(private http: HttpClient) { }

    async getMarcaVehiculos() {
        return await firstValueFrom(this.http.get<any>('assets/demo/data/marca-vehiculo.json'))            
            .then(res => res.data as any[])
            .then(data => data);
    }
}
