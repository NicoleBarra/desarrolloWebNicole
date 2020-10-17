import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../../services/professor.service';

@Component({
  selector: 'app-captura-profesor',
  templateUrl: './captura-profesor.component.html',
  styleUrls: ['./captura-profesor.component.scss']
})
export class CapturaProfesorComponent implements OnInit {
  saludo: any;
  constructor(private professor: ProfessorService) { }

  ngOnInit(): void {
  }

  accion(): void{
    this.saludo = this.professor.getSaludo();
  }

}
