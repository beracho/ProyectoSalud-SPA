import { Component, OnInit } from '@angular/core';
import { PatientI } from 'src/app/models/PatientModel';
import { ServiceApiService } from '../../service/api/service-api.service';
@Component({
  selector: 'app-seacrh-m',
  templateUrl: './seacrh-m.component.html',
  styleUrls: ['./seacrh-m.component.css']
})
export class SeacrhMComponent implements OnInit {

  matricula = '';
  pat: PatientI;
  sw = false;
  constructor(private api: ServiceApiService) { }

  ngOnInit(): void {
  }

  searching(mt: string): void{
    if (mt){
      this.matricula = mt;
      this.api.getRegistrationNumber(this.matricula).subscribe(
        (data: PatientI) => {
          if (data){
            this.pat = data;
            // console.log(this.pat);
            this.sw = !this.sw;
          }
        },
        (err) => {
          if (err){
            console.log('Ocurrio un Error');
          }
        }
      );
    }
    // console.log(this.matricula);
  }
}
