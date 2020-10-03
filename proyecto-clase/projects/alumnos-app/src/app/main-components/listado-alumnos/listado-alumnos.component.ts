import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../models/alumnos';

@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.scss'],
})
export class ListadoAlumnosComponent implements OnInit {
  alumnos: Alumno[] = [
    { matricula: '1', nombre: 'Juan', carrera: 'ITC', edad: 21 },
    { matricula: '2', nombre: 'Sandra', carrera: 'ITC', edad: 22 },
    { matricula: '1', nombre: 'Rosa', carrera: 'ITSE', edad: 22 },
    { matricula: '1', nombre: 'Robert', carrera: 'ITC', edad: 23 },
  ];
  constructor() {}

  ngOnInit(): void {}
}
