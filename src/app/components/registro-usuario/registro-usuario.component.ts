import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {
  regForm = new FormGroup(
    {
      nombre: new FormControl(null, Validators.required),
      apPat: new FormControl(null, Validators.required),
      Nombre: new FormControl(null, Validators.required),
      apMat: new FormControl(null, Validators.required),
      carOcu: new FormControl(null, Validators.required),
      especialidad: new FormControl(null, Validators.required),
      Password: new FormControl(null, Validators.required),
    }
  );
  constructor() { }

  ngOnInit(): void {
  }
  onRegister(form): void {

  }

}
