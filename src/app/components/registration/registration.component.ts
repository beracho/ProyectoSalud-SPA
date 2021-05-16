import { formatCurrency } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators, FormArray, FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

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

  imagenPrevia: any;
  files: Array<any>;
  loading: boolean;
  uploadForm: FormGroup;
  constructor(private sanitizer: DomSanitizer, private formBuilder: FormBuilder, private httpClient: HttpClient) {
  }
 ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      ImageFile: ['']
    });
  }
  // mandamos la peticion
  onSubmit(): void {
    const formData = new FormData();
    formData.append('file', this.loginForm.get('ImageFile').value);

    this.httpClient.put<any>(`localhost:5000/api/patient/${localStorage.getItem('idUser')}/UploadPhoto`, formData, {headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': `multipart/form-data`
    }}).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }


  // selecciona fike https://www.techiediaries.com/angular-formdata/
  onFileSelect(event): void {
    // console.log(event.target.files[0]);
    const imagen = event.target.files[0];
    // console.log(imagen);
    if (imagen) {
      console.log('Si es una imagen');
      // this.files.push(imagen);
      this.blobFile(imagen).then((res: any) => {
        this.imagenPrevia = res.base;
        this.uploadForm.get('ImageFile').setValue(event.target.files[0]);
        // console.log(this.imagenPrevia);
      });
    } else {
      console.log('No es imagen');

    }
  }


  /**
   *
   * Esta funciones se encarga de enviar archivos al servidor
   */

  //  loadImages = () => {
  //   try {
  //     const formData = new FormData();
  //     this.files.forEach((item) => {
  //       formData.append('files', item)
  //     });
  //     this.loading = true;
  //     this.httpClient.post(`http://localhost:3001/upload`, formData)
  //       .subscribe(res => {
  //         this.loading = false;
  //         console.log('Carga exitosa');


  //       });
  //   } catch (e) {
  //     console.log('ERROR', e);

  //   }
  // }

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

  blobFile = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          blob: $event,
          image,
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          blob: $event,
          image,
          base: null
        });
      };

    } catch (e) {
      return null;
    }
  })
}
