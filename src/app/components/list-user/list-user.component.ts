import { Component, OnInit } from '@angular/core';
import { UserI } from 'src/app/models/User.model';
import { ServiceApiService } from '../../service/api/service-api.service';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users: UserI[] = [];
  constructor(private api: ServiceApiService) { }
  ngOnInit(): void {
    this.api.getUserList().subscribe(
      (data: UserI[]) => {
        this.users = data;
        console.log(this.users.length);
      }
    );
  }

}
