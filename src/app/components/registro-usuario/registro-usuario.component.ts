import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserI } from 'src/app/models/User.model';
import { ServiceApiService } from 'src/app/service/api/service-api.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {
  regForm = new FormGroup(
    {
      Email: new FormControl(null, Validators.required),
      Username: new FormControl(null, Validators.required),
      FirstName: new FormControl(null, Validators.required),
      LastName: new FormControl(null, Validators.required),
      Rol: new FormControl(null, Validators.required),
      especialidad: new FormControl(null, Validators.required),
      Password: new FormControl(null, Validators.required),
    }
  );
  constructor(private api: ServiceApiService) { }

  ngOnInit(): void {
  }
  onRegister(form: UserI): void {
    // console.log(form);
   try {
      this.api.onRegisterUser(form).subscribe(
        (data) => {
          // ! print User data Rest APi
          // ? data.token acces a data
          // console.log(data.user);
          // const decodeToken = jwtDecode(data.token);
          if (data) {
            // localStorage.setItem('token', data.token);
            // localStorage.setItem('id', data.user.id);
            // console.log(data.rols[0].name);
            // localStorage.setItem('nameRol', data.rols[0].name);
            // console.log('data ' + localStorage.getItem('nameRol'));
            // this.router.navigate(['home']);
            console.log(data);

          } else {
            console.log('not data');
          }
          // console.log(decodeToken);
        },
        (err) => {
          console.error(err.error);
          if (err) {
            // this.suceessw = true;
            console.log('err1');
          } else {
            console.log('error...');
          }
        }
      );
    } catch (error) {
      console.log('Internal Server error');
    }

  }

}
