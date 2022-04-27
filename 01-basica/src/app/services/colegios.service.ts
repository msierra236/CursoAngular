import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColegiosService {

  colegios: string[] = ['Azarquiel','Infantes','Europa','El Greco'];

  constructor() {
    console.log('Iniciando el servicio de colegios')
   }
   

   getColegios(): string[] {
      return [...this.colegios];

   }
   agregarColegios(): void {
     this.colegios.push(`colegio ${this.colegios.length + 1}`);
   }

   borrarColegios(): void {
     this.colegios.shift();
   }
}
