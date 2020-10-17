import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CapturaProfesorComponent } from './components/captura-profesor/captura-profesor.component';
import { ListaProfesorComponent } from './components/lista-profesor/lista-profesor.component';

const routes: Routes = [
  { path: 'captura', component: CapturaProfesorComponent },
  { path: 'lista', component: ListaProfesorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessorRoutingModule { }
