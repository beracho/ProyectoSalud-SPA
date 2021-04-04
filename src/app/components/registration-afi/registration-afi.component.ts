import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-afi',
  templateUrl: './registration-afi.component.html',
  styleUrls: ['./registration-afi.component.css']
})
export class RegistrationAfiComponent implements OnInit {
  AseguradoFrom = new FormGroup(
    {
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
      tpS: new FormControl('', Validators.required),
      tpAfiliado: new FormControl('', Validators.required),
      estado: new FormControl('', Validators.required),
      observasione: new FormControl('', Validators.required),
    }
  );
  constructor() { }

  ngOnInit(): void {
  }

  regAseg(form): void {

  }
}
