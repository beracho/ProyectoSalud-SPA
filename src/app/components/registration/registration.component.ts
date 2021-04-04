import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  loginForm = new FormGroup(
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
      patologias1: new FormControl(false),
      patologias2: new FormControl(false),
      patologias3: new FormControl(false),
      patologias4: new FormControl(false),
      patologias5: new FormControl(false),
      patologias6: new FormControl(false),
      patologias7: new FormControl(false),
      patologias8: new FormControl(false),

    });
    ResponsPatolo = [];
    patologias = ['alergias', 'Asma Bronquial', 'cardiologicos', 'Oncologicos', 'Discracias Sanguinea', 'Diabetes', 'Ipertencion Arterial', 'Renales'];
  constructor() { }

  ngOnInit(): void {
  }

  registerUser(form): void {
    this.checkBoxValidate(form);

    alert(form.patologias8 + ':' + this.patologias[7] +  ' ' + form.patologias7);
  }

  checkBoxValidate(form): void{
    if (form.patologias1){
      this.ResponsPatolo[0] = this.patologias[0];
    }else{
      this.ResponsPatolo[0] = '';
    }
    if (form.patologias2){
      this.ResponsPatolo[1] = this.patologias[1];
    }else{
      this.ResponsPatolo[1] = '';
    }
    if (form.patologias3){
      this.ResponsPatolo[2] = this.patologias[2];
    }else{
      this.ResponsPatolo[2] = '';
    }
    if (form.patologias4){
      this.ResponsPatolo[3] = this.patologias[3];
    }else{
      this.ResponsPatolo[3] = '';
    }
    if (form.patologias5){
      this.ResponsPatolo[4] = this.patologias[4];
    }else{
      this.ResponsPatolo[4] = '';
    }
    if (form.patologias6){
      this.ResponsPatolo[5] = this.patologias[5];
    }else{
      this.ResponsPatolo[5] = '';
    }
    if (form.patologias7){
      this.ResponsPatolo[6] = this.patologias[6];
    }else{
      this.ResponsPatolo[6] = '';
    }
    if (form.patologias8){
      this.ResponsPatolo[7] = this.patologias[7];
    }else{
      this.ResponsPatolo[7] = '';
    }
  }
}
