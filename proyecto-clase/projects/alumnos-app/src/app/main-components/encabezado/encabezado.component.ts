import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../models/alumnos';
@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss'],
})
export class EncabezadoComponent implements OnInit {
  alumno: Alumno = {
    matricula: '955014',
    nombre: 'Juan',
    edad: 20,
    carrera: 'ITC',
  };
  fecha = new Date();
  constructor() {}

  ngOnInit(): void {}
}
