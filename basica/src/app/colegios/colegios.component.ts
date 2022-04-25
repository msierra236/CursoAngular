import { Component, OnInit } from '@angular/core';
import { ColegiosService } from '../services/colegios.service';

@Component({
  selector: 'app-colegios',
  templateUrl: './colegios.component.html',
  styleUrls: ['./colegios.component.css']
})
export class ColegiosComponent implements OnInit {

  colegios: string[] = ['Azarquiel','Infantes','Europa','El Greco'];

  constructor(private ColegiosService: ColegiosService) { }

  ngOnInit(): void {
  }

  agregarColegio(): void {
    this.colegios.push(`colegio ${this.colegios.length + 1}`);

  }
  borrarColegio(): void {
    this.colegios.shift();
  }

}
