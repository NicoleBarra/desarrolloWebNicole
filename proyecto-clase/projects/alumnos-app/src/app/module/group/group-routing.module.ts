import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CapturaGroupComponent } from './components/captura-group/captura-group.component';

const routes: Routes = [
  {path:'captura', component:CapturaGroupComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule { }
