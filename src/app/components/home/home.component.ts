import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  rolUser = localStorage.getItem('nameRol');

  constructor( private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['home/search']);
  }

  getRolName(): boolean{
    if (this.rolUser === 'admin'){
      return true;
    }
    return false;
  }
  salir(): void{
    localStorage.removeItem('token');
    if (!localStorage.getItem('token')){
      this.router.navigate(['login']);
    }
    // console.log('Delet Token\n');
    // console.log(localStorage.getItem('token'));
  }

}
