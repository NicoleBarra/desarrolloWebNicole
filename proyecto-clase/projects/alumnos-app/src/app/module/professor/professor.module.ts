import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessorRoutingModule } from './professor-routing.module';
import { ListaProfesorComponent } from './components/lista-profesor/lista-profesor.component';
import { CapturaProfesorComponent } from './components/captura-profesor/captura-profesor.component';
import { RegistroListaProfesorComponent } from './components/registro-lista-profesor/registro-lista-profesor.component';
import { ProfessorComponent } from './components/professor/professor.component';


@NgModule({
  declarations: [ListaProfesorComponent, CapturaProfesorComponent, RegistroListaProfesorComponent, ProfessorComponent],
  imports: [
    CommonModule,
    ProfessorRoutingModule
  ]
})
export class ProfessorModule { }
