import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RenewalService } from 'src/app/service/renewal.service';

@Component({
  selector: 'app-user-up-coming-renewal',
  templateUrl: './user-up-coming-renewal.component.html',
  styleUrls: ['./user-up-coming-renewal.component.css']
})
export class UserUpComingRenewalComponent implements OnInit {

  constructor(
    private _snac:MatSnackBar, private router:Router, public renewal:RenewalService) { }

  ngOnInit(): void {
  }

  gotoHealth(){
    this.router.navigate(['app-user-health'])
  }

}
