import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from 'src/app/service/api/service-api.service';

@Component({
  selector: 'app-restart-password',
  templateUrl: './restart-password.component.html',
  styleUrls: ['./restart-password.component.css']
})
export class RestartPasswordComponent implements OnInit {
  pwd = '';
  pwd2 = '';
  pass = '';
  suceessw = false;
  constructor(private api: ServiceApiService) { }

  ngOnInit(): void {
  }

  resetPwd(pwd, pwd2, pass): void{
    this.pwd = pwd;
    this.pwd2 = pwd2;
    const email: string = localStorage.getItem('UsernameOrEmail');
    const id: string = localStorage.getItem('idUser');
    // ! Update Password
    // ? console.log(id);
    // ? console.log(email);
    if (this.pwd === this.pwd2){
      this.suceessw = false;
      this.api.updatePwd(pwd, pass, email, id).subscribe(
        (data) => {
          console.log(data);
        },
        err => {

          if (err){
            console.log('ocurrio un error');
          }

        }
      );
      // console.log('eq');
    }else{
      this.suceessw = true;
      // console.log('not eq');
    }


  }

}
