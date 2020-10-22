import { Component, OnInit } from '@angular/core';
import { PROFESSORS } from 'projects/alumnos-app/src/app/models/professor';
import { ProfessorService } from '../../services/professor.service';

@Component({
  selector: 'app-captura-profesor',
  templateUrl: './captura-profesor.component.html',
  styleUrls: ['./captura-profesor.component.scss']
})
export class CapturaProfesorComponent implements OnInit {
  historiaClases: string[] = [];
  profesores = PROFESSORS;
  clases = ["Moviles", "Algoritmos", "Fundamentos de programacion", "Seguridad"];
  indice = 0;

  constructor(private professorService: ProfessorService) { 
    professorService.claseAceptadaAnunciada$.subscribe(
      profesor => {
        this.historiaClases.push(`${profesor}acepto la clase`);
      })

  }

  ngOnInit(): void {
  }

  inicioClase() {
    const clase = this.clases[this.indice++];
    this.professorService.incribirClase(clase)
    this.historiaClases.push("Clase ${clase} inscrita");

  }



}
