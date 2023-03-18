import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  gotoprofile(){
    this.router.navigate(['app-user-profile']);
  }

  gotoHealth(){
    this.router.navigate(['app-user-health'])
  }

}
