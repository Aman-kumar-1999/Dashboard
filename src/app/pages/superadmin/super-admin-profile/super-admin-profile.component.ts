import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-super-admin-profile',
  templateUrl: './super-admin-profile.component.html',
  styleUrls: ['./super-admin-profile.component.css']
})
export class SuperAdminProfileComponent implements OnInit {

  constructor( public login:LoginService) {}

  ngOnInit(): void {
  }

}
