import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapturaGroupComponent } from './components/captura-group/captura-group.component';
import {  ReactiveFormsModule } from "@angular/forms";

import { GroupRoutingModule } from './group-routing.module';


@NgModule({
  declarations: [CapturaGroupComponent],
  imports: [
    CommonModule,
    GroupRoutingModule,
    ReactiveFormsModule
  ]
})
export class GroupModule { }
