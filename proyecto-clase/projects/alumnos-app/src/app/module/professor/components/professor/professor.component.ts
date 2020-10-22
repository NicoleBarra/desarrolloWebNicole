import { Component, OnInit , Input} from '@angular/core';
import { Subscription } from 'rxjs';
import { ProfessorService } from '../../services/professor.service';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.scss']
})
export class ProfessorComponent implements OnInit {
  @Input() profesor!: string
  clase = "sin clases";
  anunciada = false;
  confirmada = false;

  subscribe: Subscription;

  constructor(private profesorService: ProfessorService) {
    this.subscribe = profesorService.claseInscritaAnunciada$.subscribe(
      clase => {
        this.clase = clase;
        this.anunciada = true;
        this.confirmada = true;
      }
    );
   }

  ngOnInit(): void {
  }
  confirmarClase() {
    console.log("en confirmar clase")
    this.confirmada = true;
    this.profesorService.aceptacionProfesor(this.profesor)
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

}
