import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seacrh-m',
  templateUrl: './seacrh-m.component.html',
  styleUrls: ['./seacrh-m.component.css']
})
export class SeacrhMComponent implements OnInit {

  matricula = '';

  constructor() { }

  ngOnInit(): void {
  }

  searching(mt: string): void{
    this.matricula = mt;
    // ! buscar la matricula
    console.log(this.matricula);
  }

}
