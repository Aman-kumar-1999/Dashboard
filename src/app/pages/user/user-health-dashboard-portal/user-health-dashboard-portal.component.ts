import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PortalService } from 'src/app/service/portal.service';

@Component({
  selector: 'app-user-health-dashboard-portal',
  templateUrl: './user-health-dashboard-portal.component.html',
  styleUrls: ['./user-health-dashboard-portal.component.css']
})
export class UserHealthDashboardPortalComponent implements OnInit {

  constructor(private _snac:MatSnackBar, private router:Router, public portal: PortalService) { }
 
  ngOnInit(): void {
  }

  public gotoHealth() {
    this.router.navigate(['app-user-health'])
  }

}
