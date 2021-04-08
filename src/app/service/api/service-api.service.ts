import { Injectable } from '@angular/core';
import { LoginI } from '../../models/Login.interface';
import { ResponseI } from '../../models/Response.interface';
import { ResponseUserI } from '../../models/ResponseUser.Interface';
import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserI } from 'src/app/models/User.model';


@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  url = 'http://localhost:5000/api/auth/';
  constructor(private http: HttpClient) {

  }

  onLogIn(form: LoginI): Observable<ResponseI> {

    // console.log(form);
    const path = this.url + 'login';
    // console.log(path);
    return this.http.post<ResponseI>(path, form );
  }
  onRegisterUser(form: UserI): Observable<ResponseUserI>{
    const path = this.url + 'register';
    return this.http.post<ResponseUserI>(path, form);
  }

}
