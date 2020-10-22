import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-captura-group',
  templateUrl: './captura-group.component.html',
  styleUrls: ['./captura-group.component.scss']
})
export class CapturaGroupComponent implements OnInit {

  modeloMaterias = this.formBuild.group(
    {
      nombreMateria: ['', Validators.required],
      semestre: ['',Validators.required],
      profesor: this.formBuild.group({
        nombre: [''],
        apellido: ['']
      })

    }
  );



  constructor(private formBuild:FormBuilder) { }

  ngOnInit(): void {
  }
  enviar() {
    console.log(this.modeloMaterias.value)

  }

  actualizar() {
    this.modeloMaterias.patchValue({
      nombreMateria: "desarrollo de aplicaciones web",
      semestre: "7",
      profesor: {
        nombre: "Juan",
        apellido: "Velez"
      }

    });
  }
}
