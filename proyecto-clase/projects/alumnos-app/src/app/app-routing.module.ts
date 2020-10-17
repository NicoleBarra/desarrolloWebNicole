import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoAlumnosComponent } from './main-components/listado-alumnos/listado-alumnos.component';
import { PageNotFoundComponent } from './main-components/page-not-found/page-not-found.component';
const routes: Routes = [
  { path: '', component: ListadoAlumnosComponent },
  {
    path: 'professor',
    loadChildren : './module/professor/professor.module#ProfessorModule'
  }, {
    path: 'groups',
    loadChildren : './module/group/group.module#GroupModule'
  },
  {
    path: '**' , component:PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
