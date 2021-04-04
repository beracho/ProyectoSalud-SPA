import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-ben',
  templateUrl: './registration-ben.component.html',
  styleUrls: ['./registration-ben.component.css']
})
export class RegistrationBenComponent implements OnInit {
  BenFrom = new FormGroup(
    {
      titular: new FormControl(null, Validators.required),
      apPat: new FormControl(null, Validators.required),
      apMat: new FormControl(null, Validators.required),
      Nombre: new FormControl(null, Validators.required),
      sexo: new FormControl('', Validators.required),
      ci: new FormControl('', Validators.required),
      estcv: new FormControl('', Validators.required),
      Ocupacion: new FormControl('', Validators.required),
      edad: new FormControl('', Validators.required),
      Regional: new FormControl('', Validators.required),
      fechaNac: new FormControl('', Validators.required),
      depNac: new FormControl('', Validators.required),
      lugNac: new FormControl('', Validators.required),
      direccion: new FormControl('', Validators.required),
      tFijo: new FormControl('', Validators.required),
      tMovil: new FormControl('', Validators.required),
      parentesco: new FormControl('', Validators.required),
      fechaExp: new FormControl('', Validators.required),
    }
  );
  constructor() { }

  ngOnInit(): void {
  }
  regBen(form): void {

  }
}
