import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CotsService } from 'src/app/service/cots.service';

@Component({
  selector: 'app-user-health-dashboard-cots',
  templateUrl: './user-health-dashboard-cots.component.html',
  styleUrls: ['./user-health-dashboard-cots.component.css']
})
export class UserHealthDashboardCotsComponent implements OnInit {

  constructor(
    private _snac: MatSnackBar,
    private router: Router,
    public cots: CotsService,
  ) { }


  ngOnInit(): void {
  }

  public gotoHealth() {
    this.router.navigate(['app-user-health'])
  }

}
