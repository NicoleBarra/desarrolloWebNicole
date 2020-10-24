import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './main-components/encabezado/encabezado.component';
import { FooterComponent } from './main-components/footer/footer.component';
import { ListadoAlumnosComponent } from './main-components/listado-alumnos/listado-alumnos.component';
import { TitulosComponent } from './main-components/titulos/titulos.component';

import { GroupModule } from './module/group/group.module';
import { ProfessorModule } from './module/professor/professor.module';
import { PageNotFoundComponent } from './main-components/page-not-found/page-not-found.component';
import { EncabezadoLogeadoComponent } from './main-components/encabezado-logeado/encabezado-logeado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, EncabezadoComponent, FooterComponent, ListadoAlumnosComponent, TitulosComponent, PageNotFoundComponent, EncabezadoLogeadoComponent],
  imports: [BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    GroupModule,
    ProfessorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
