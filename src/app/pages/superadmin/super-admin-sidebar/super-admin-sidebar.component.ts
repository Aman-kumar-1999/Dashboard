import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-super-admin-sidebar',
  templateUrl: './super-admin-sidebar.component.html',
  styleUrls: ['./super-admin-sidebar.component.css']
})
export class SuperAdminSidebarComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  gotoprofile(){
    this.router.navigate(['app-super-admin-profile']);
  }

  gotoHealth(){
    this.router.navigate(['app-super-admin-health'])
  }

}
