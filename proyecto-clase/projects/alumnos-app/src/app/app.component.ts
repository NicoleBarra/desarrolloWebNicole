import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { animacionesClase } from './animaciones';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[animacionesClase]
})
export class AppComponent {
  title = 'alumnos-app';
  loggedIn = true;

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
