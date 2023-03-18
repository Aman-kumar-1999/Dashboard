import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortalService } from 'src/app/service/portal.service';

@Component({
  selector: 'app-health-dashboard-portal',
  templateUrl: './health-dashboard-portal.component.html',
  styleUrls: ['./health-dashboard-portal.component.css']
})
export class HealthDashboardPortalComponent implements OnInit {

  constructor(private router:Router, public portal: PortalService) { }
 


  ngOnInit(): void {
  }

  public gotoHealth() {
    this.router.navigate(['health'])
  }

  public insertPortal() {
    this.router.navigate(['app-insert-portal'])
  }

}
