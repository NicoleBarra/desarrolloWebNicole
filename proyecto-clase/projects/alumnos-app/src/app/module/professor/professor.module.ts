import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessorRoutingModule } from './professor-routing.module';
import { ListaProfesorComponent } from './components/lista-profesor/lista-profesor.component';
import { CapturaProfesorComponent } from './components/captura-profesor/captura-profesor.component';


@NgModule({
  declarations: [ListaProfesorComponent, CapturaProfesorComponent],
  imports: [
    CommonModule,
    ProfessorRoutingModule
  ]
})
export class ProfessorModule { }
