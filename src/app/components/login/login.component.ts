import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators} from '@angular/forms';
import { ServiceApiService } from '../../service/api/service-api.service';
import { LoginI } from '../../models/Login.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { jwtDecode } from '../../functions/jwt-decoder';
import { Router } from '@angular/router';
// import { UserI } from '../../models/User.model';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup(
    {
      UsernameOrEmail: new FormControl(null, Validators.required),
      Password: new FormControl(null, Validators.required)
    }
  );

    suceessw = false;

  constructor(private api: ServiceApiService, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('token')){
      this.router.navigate(['home']);
      console.log('Exists Token' + localStorage.getItem('token'));
    }else{
      console.log('not Token');
    }
  }
  onLogin(form: LoginI): void{
    try {
      this.api.onLogIn(form).subscribe(
        (data) => {
          // ! print User data Rest APi
          // ? data.token acces a data
          // console.log(data.user);
          // const decodeToken = jwtDecode(data.token);
          if (data){
            localStorage.setItem('token', data.token);
            // localStorage.setItem('id', data.user.id);
            // console.log(data.rols[0].name);
            localStorage.setItem('nameRol', data.rols[0].name);
            localStorage.setItem('UsernameOrEmail', data.user.Username);
            localStorage.setItem('idUser', data.user.id.toString());
            console.log('data ' + localStorage.getItem('nameRol'));
            this.router.navigate(['home']);
            console.log('exist data');

          }else{
            this.suceessw = true;
            console.log('not data');
          }
          // console.log(decodeToken);
        },
        (err) => {
          console.error(err.error);
          if (err) {
            this.suceessw = true;
            // console.log('err1');
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
