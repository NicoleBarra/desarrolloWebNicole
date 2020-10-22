import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  //los datos en los cuales van cambiar y se notificara
  private claseInscrita = new Subject<string>();
  private claseAceptada = new Subject<string>();

  claseInscritaAnunciada$ = this.claseInscrita.asObservable();
  claseAceptadaAnunciada$ = this.claseAceptada.asObservable();

  incribirClase(clase: string) {
    this.claseInscrita.next(clase);
  }

  aceptacionProfesor(prof: string) {
    this.claseAceptada.next(prof);
  }






}
