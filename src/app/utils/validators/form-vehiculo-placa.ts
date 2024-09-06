import { AbstractControl, AsyncValidatorFn, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { catchError, map, Observable } from "rxjs";
import { VehiculoService } from "src/app/services/vehiculo.service";

/*export const placaVehiculoValidation: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    //const placa = group.get('placa') as FormControl;
    console.log(group.value);
    if(group?.value){
        let resultado = !(group.value.includes('M')) ? null : { placaVehiculoValidation: true };
        console.log(resultado);
        return resultado;
    } else {
        return null;
    }
}*/
export function placaVehiculoValidationAsync(vehiculoService: VehiculoService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const value = control.value;    
      if(value){

          // Simulate API call using the service
          return vehiculoService.obtenerPlacas().pipe(
            map((response) => {       
                
              //Assuming you check if the value exists in the response data
              const isValid = response['data'].some(item => item.placa === value);
      
              // Return null if valid, or an error object if not valid
              return !isValid ? null : { placaVehiculoValidationAsync: true };
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