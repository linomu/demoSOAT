import { AbstractControl, AsyncValidatorFn,  ValidationErrors} from "@angular/forms";
import { catchError, map, Observable } from "rxjs";
import { VehiculoService } from "src/app/services/vehiculo.service";

export function numeroVinVehiculoValidationAsync(vehiculoService: VehiculoService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const value = control.value;    
      if(value){

          // Simulate API call using the service
          return vehiculoService.obtenerNumeroVin().pipe(
            map((response) => {       
                
              //Assuming you check if the value exists in the response data
              const isValid = response['data'].some(item => item.numeroVin === value);
      
              // Return null if valid, or an error object if not valid
              return !isValid ? null : { numeroVinVehiculoValidationAsync: true };
            }),
            catchError(() => {
              // Handle errors (optional: you could return null to mark it as valid or return an error)
              return null;
            })
          );
      } else {
        return null;
      }
  
    };
  }