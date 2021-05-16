import { Injectable } from '@angular/core';
import { LoginI } from '../../models/Login.interface';
import { ResponseI } from '../../models/Response.interface';
import { ResponseUserI } from '../../models/ResponseUser.Interface';
import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';
import { UserI } from 'src/app/models/User.model';
import { PatientI } from 'src/app/models/PatientModel';
import { PatI } from 'src/app/models/PatI';


@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  url = 'http://localhost:5000/api/auth/';
  token = `Bearer ${localStorage.getItem('token')}`;
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
  getUserById(id): Observable<any>{
    console.log(id);
    const token = localStorage.getItem('token');
    // console.log(token);
    return this.http.get<any>(`http://localhost:5000/api/Users/${id}`, {headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': `application/json`,
    }});
  }

  getUserList(): Observable<UserI[]> {
    // console.log(localStorage.getItem('token'));
    const path = 'localhost:5000/api/Users';
    return this.http.get<UserI[]>(path,  {headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }});
  }

  getRegistrationNumber(numberReg): Observable<PatientI>{
    const path = 'http://localhost:5000/api/patient/' + numberReg;
    return this.http.get<PatientI>(path,  {
      headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
      }
    });
  }
  getPatientsList(): Observable<PatientI[]> {
    // console.log(localStorage.getItem('token'));
    const path = 'http://localhost:5000/api/patient';
    return this.http.get<PatientI[]>(path,  {headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }});
  }

  updatePwd(pwd: string, pwdold: string, name: string, id: string): Observable<any>{
    const path = 'http://localhost:5000/api/Users/' + id + '/ChangePassword';
    return this.http.put<any>(path, {
      UsernameOrEmail: name,
      CurrentPassword: pwdold,
      NewPassword: pwd
      } , {headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
      'Content-Type': `application/json`
    }});
  }

  registerPatient(fomr: PatI): Observable<any> {
    // localhost:5000/api/patient
    const path = 'http://localhost:5000/api/patient';
    return this.http.post<ResponseUserI>(path, fomr, {headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
      'Content-Type': `application/json`
    }} );
  }

}
