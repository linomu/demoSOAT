import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(private http: HttpClient) {}

  obtenerPlacas(): Observable<any> {
    return this.http.get('assets/demo/data/placas-registradas.json')
    .pipe(
      delay(2000),
      /*map((response) => {
        console.log(response);
        return response;
        //return response.some(r => r.placa === placa); 
      })*/
    );
  }

  obtenerNumeroVin(): Observable<any> {
    return this.http.get('assets/demo/data/numero-vin-registrados.json')
    .pipe(
      delay(2000),
    );
  }
}
