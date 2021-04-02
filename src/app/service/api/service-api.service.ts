import { Injectable } from '@angular/core';
import { LoginI } from '../../models/Login.interface';
import { ResponseI } from '../../models/Response.interface';
import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


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

}
