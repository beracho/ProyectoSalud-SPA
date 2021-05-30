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

  url = 'http://localhost:5000/api/';
  token = `Bearer ${localStorage.getItem('token')}`;
  
  constructor(private http: HttpClient) {}


  onRegisterUser(form: UserI): Observable<ResponseUserI> {
    const path = this.url + 'auth/register';
    return this.http.post<ResponseUserI>(path, form);
  }

  onLogIn(form: LoginI): Observable<ResponseI> {
    // console.log(form);
    const path = this.url + 'auth/login';
    // console.log(path);
    return this.http.post<ResponseI>(path, form);
  }

  
  updatePwd(pwd: string, pwdold: string, name: string, id: string): Observable<any> {
    const path = this.url+'Users/' + id + '/ChangePassword';
    console.log(path);
    console.log("new pas",pwd);
    console.log("old pas",pwdold);
    console.log("username",name);
    return this.http.put<any>(path, {
      UsernameOrEmail: name,
      CurrentPassword: pwdold,
      NewPassword: pwd
    }, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': `application/json`
      }
    });
  }
  
  getUserList(): Observable<UserI[]> {
    // console.log(localStorage.getItem('token'));
    const path = this.url+'Users';
    return this.http.get<UserI[]>(path, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      }
    });
  }
  getUserById(id): Observable<any> {
    // console.log(id);
    const token = localStorage.getItem('token');
    const path = this.url+'Users/'+id;
    // console.log(token);
    return this.http.get<any>(path, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': `application/json`,
      }
    });
  }

  
  registerPatient(fomr: PatI): Observable<any> {
    // localhost:5000/api/patient
    const path = this.url+'patient';
    return this.http.post<ResponseUserI>(path, fomr, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': `application/json`
      }
    });
  }

  getPatientsList(): Observable<PatientI[]> {
    // console.log(localStorage.getItem('token'));
    const path = this.url+'patient';
    return this.http.get<PatientI[]>(path, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      }
    });
  }
  getRegistrationNumber(numberReg): Observable<PatientI> {
    const path = this.url+'patient/' + numberReg;
    return this.http.get<PatientI>(path, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      }
    });
  }


}
