import { formatCurrency } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  loginForm = new FormGroup(
    {
      ExpeditionCi: new FormControl(null, Validators.required),
      LastName: new FormControl(null, Validators.required),
      Name: new FormControl(null, Validators.required),
      Gender: new FormControl('', Validators.required),
      Ci: new FormControl('', Validators.required),
      CivilStatus: new FormControl('', Validators.required),
      Ocupation: new FormControl('', Validators.required),
      Regional: new FormControl('', Validators.required),
      BirthDate: new FormControl('', Validators.required),
      BirthState: new FormControl('', Validators.required),
      BirthCity: new FormControl('', Validators.required),
      Address: new FormControl('', Validators.required),
      Telephone: new FormControl('', Validators.required),
      CellPhone: new FormControl('', Validators.required),
      BloodType: new FormControl('', Validators.required),
      PathologicalBackground: new FormControl('', Validators.required),
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
  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      profile: ['']
    });
  }
  // mandamos la peticion
  onSubmit(): void {
    const formData = new FormData();
    formData.append('file', this.loginForm.get('profile').value);

    this.httpClient.put<any>('URLPARH', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }


  // selecciona fike https://www.techiediaries.com/angular-formdata/
  onFileSelect(event): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.loginForm.get('profile').setValue(file);
    }
  }
  registerUser(form): void {
    this.checkBoxValidate(form);
    // this.ResponsPatolo.filter(data => data).toString();
    form.PathologicalBackground = this.ResponsPatolo.filter(data => data).toString();
    console.log(form);
    this.ResponsPatolo.forEach(data => console.log(data));
  }

  obsCi(form): void {

  }

  checkBoxValidate(form): void {
    if (form.patologias1) {
      this.ResponsPatolo[0] = this.patologias[0];
    }
    if (form.patologias2) {
      this.ResponsPatolo[1] = this.patologias[1];
    }
    if (form.patologias3) {
      this.ResponsPatolo[2] = this.patologias[2];
    }
    if (form.patologias4) {
      this.ResponsPatolo[3] = this.patologias[3];
    }
    if (form.patologias5) {
      this.ResponsPatolo[4] = this.patologias[4];
    }
    if (form.patologias6) {
      this.ResponsPatolo[5] = this.patologias[5];
    }
    if (form.patologias7) {
      this.ResponsPatolo[6] = this.patologias[6];
    }
    if (form.patologias8) {
      this.ResponsPatolo[7] = this.patologias[7];
    }
  }
}
