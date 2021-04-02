import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators} from '@angular/forms';
import { ServiceApiService } from '../../service/api/service-api.service';
import { LoginI } from '../../models/Login.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { jwtDecode } from '../../functions/jwt-decoder';
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

  constructor(private api: ServiceApiService) { }

  ngOnInit(): void {
  }
  onLogin(form: LoginI): void{
    this.api.onLogIn(form).subscribe(
      (data) => {
        // ! print User data Rest APi
        // ? data.token acces a data
        console.log(data.user);
        const decodeToken = jwtDecode(data.token);
        console.log(decodeToken);
      }
      ,
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('err1');
        } else {
          console.log('error...');
        }
      }
    );
  }

}
