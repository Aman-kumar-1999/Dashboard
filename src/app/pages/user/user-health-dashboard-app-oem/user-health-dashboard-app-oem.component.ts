import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { OemService } from 'src/app/service/oem.service';

@Component({
  selector: 'app-user-health-dashboard-app-oem',
  templateUrl: './user-health-dashboard-app-oem.component.html',
  styleUrls: ['./user-health-dashboard-app-oem.component.css']
})
export class UserHealthDashboardAppOemComponent implements OnInit {

  constructor(
    private _snac:MatSnackBar,
    private router: Router,
    public oem:OemService,
    ) { }

  ngOnInit(): void {
  }

  gotoHealth(){
    this.router.navigate(['app-user-health'])
  }

}
