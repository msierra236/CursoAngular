import { Component, OnInit } from '@angular/core';
import { ColegiosService } from '../services/colegios.service';

@Component({
  selector: 'app-colegios',
  templateUrl: './colegios.component.html',
  styleUrls: ['./colegios.component.css']
})
export class ColegiosComponent implements OnInit {
  colegios: string[] = [];
  //colegios: string[] = ['Azarquiel','Infantes','Europa','El Greco'];

  constructor(private colegiosService: ColegiosService) { }

  ngOnInit(): void {
    this.colegios = this.colegiosService.getColegios();
  }

  cargarColegios(): void {
    this.colegios = this.colegiosService.getColegios();
  }

  agregarColegio(): void {
    this.colegiosService.agregarColegios();
    this.cargarColegios();
    console.log('Agregar colegio');
    //this.colegios.push(`colegio ${this.colegios.length + 1}`);

  }
  borrarColegio(): void {
    this.colegiosService.borrarColegios();
    this.cargarColegios();
    console.log('borrar colegio')
    //this.colegios.shift();
  }

  

}
