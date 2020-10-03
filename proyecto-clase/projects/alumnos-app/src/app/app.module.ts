import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './main-components/encabezado/encabezado.component';
import { FooterComponent } from './main-components/footer/footer.component';
import { ListadoAlumnosComponent } from './main-components/listado-alumnos/listado-alumnos.component';

@NgModule({
  declarations: [AppComponent, EncabezadoComponent, FooterComponent, ListadoAlumnosComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
