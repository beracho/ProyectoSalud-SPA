import { Component, OnInit } from '@angular/core';
import { PatientI } from 'src/app/models/PatientModel';
import { ServiceApiService } from 'src/app/service/api/service-api.service';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css']
})
export class ListPatientsComponent implements OnInit {
  pat: PatientI[] = [];
  constructor(private api: ServiceApiService) { }

  ngOnInit(): void {
    this.api.getPatientsList().subscribe(
      (data: PatientI[]) => {
        this.pat = data;
        console.log(this.pat.length);
      }
    );
  }

}
