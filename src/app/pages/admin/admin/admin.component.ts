import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor( ) { }

  ngOnInit(): void {
  }

  // public slidebare(){
  //   this.router.navigate(['sidebar']);
  // }

}
