import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../models/alumnos';
import { animation, trigger, animateChild, group, transition, animate, style, query, state } from '@angular/animations';

@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.scss'],
  animations: [
    trigger('childAnimation', [
      // ...
      state('open', style({
        width: '250px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        width: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('3s')
      ]),
    ]),
  ],
})
export class ListadoAlumnosComponent implements OnInit {

  alumnoSeleccionado: any;

  alumnos: Alumno[] = [
    { matricula: '1', nombre: 'Juan', carrera: 'ITC', edad: 21 },
    { matricula: '2', nombre: 'Sandra', carrera: 'ITC', edad: 22 },
    { matricula: '1', nombre: 'Rosa', carrera: 'ITSE', edad: 22 },
    { matricula: '1', nombre: 'Robert', carrera: 'ITC', edad: 23 },
  ];
  constructor() {}


  estilo = false;

  ngOnInit(): void { }

  seleccionAlumnos(alumno: Alumno): void{
    this.alumnoSeleccionado = alumno;
  }



  toggle() {
    this.estilo = !this.estilo;
  }

}
