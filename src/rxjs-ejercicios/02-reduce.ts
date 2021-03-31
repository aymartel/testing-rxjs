import { from } from 'rxjs';
import { filter, reduce, scan, tap } from 'rxjs/operators';

/**
 * Ejercicio: 
 * Sume todos los números del arreglo usando un reduce.
 * Debe de filtrar para que sólo números sean procesados
 * La salida debe de ser 32
 * 
 * Tip:
 * isNan() es una función de JavaScript para determinar si es número
 * Usar filter<any>(...) para no tener problemas de tipado.
 */

(() =>{
  

  const datos = [1, 2, 'foo', 3, 5, 6, 'bar', 7, 8];

  from(datos).pipe(
     filter<any>(val=>!isNaN(val)),
     reduce( ( acumulador: number, valorActual: number ) => {
      return acumulador + valorActual;
  }, 0 )


  ).subscribe( console.log ) // La salida debe de ser 32



})();

		