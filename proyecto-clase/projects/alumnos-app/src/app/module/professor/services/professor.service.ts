import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  hola: string = "Hola";

  constructor() { }

  getSaludo(): string {
      return this.hola
  }
}
