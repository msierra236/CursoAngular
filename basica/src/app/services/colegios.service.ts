import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColegiosService {

  constructor() {
    console.log('Iniciando el servicio de colegios')
   }
   lista(){
     console.log('traigo la lista de golegios')
   }
}
