import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { InfraService } from 'src/app/service/infra.service';

@Component({
  selector: 'app-user-health-dashboard-infra',
  templateUrl: './user-health-dashboard-infra.component.html',
  styleUrls: ['./user-health-dashboard-infra.component.css']
})
export class UserHealthDashboardInfraComponent implements OnInit {

  constructor(private _snac: MatSnackBar, private router:Router, public infra:InfraService) { }

  ngOnInit(): void {
  }

  gotoHealth(){
    this.router.navigate(['app-user-health'])
  }

}
