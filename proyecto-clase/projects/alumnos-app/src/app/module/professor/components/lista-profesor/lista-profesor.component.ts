import { Component, OnInit } from '@angular/core';
import { PROFESSORS } from '../../../../models/professor';

@Component({
  selector: 'app-lista-profesor',
  templateUrl: './lista-profesor.component.html',
  styleUrls: ['./lista-profesor.component.scss']
})
export class ListaProfesorComponent implements OnInit {
  professors = PROFESSORS;
  variable ="cualquier cosa"
  constructor() { }

  ngOnInit(): void {
  }

}
