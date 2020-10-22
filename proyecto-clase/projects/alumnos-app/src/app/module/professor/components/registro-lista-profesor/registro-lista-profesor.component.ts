import { Component, OnInit,Input } from '@angular/core';
import { Professor } from '../../../../models/professor';


@Component({
  selector: 'app-registro-lista-profesor',
  templateUrl: './registro-lista-profesor.component.html',
  styleUrls: ['./registro-lista-profesor.component.scss']
})
export class RegistroListaProfesorComponent implements OnInit {

  @Input()
  professor!: Professor;

  @Input("padre")
  titulo!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
