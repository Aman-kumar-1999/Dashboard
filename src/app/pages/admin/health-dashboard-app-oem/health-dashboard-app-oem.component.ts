import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OemService } from 'src/app/service/oem.service';

@Component({
  selector: 'app-health-dashboard-app-oem',
  templateUrl: './health-dashboard-app-oem.component.html',
  styleUrls: ['./health-dashboard-app-oem.component.css']
})
export class HealthDashboardAppOemComponent implements OnInit {

  
  constructor(
    private router:Router,
    public oem:OemService,
    ) { }

  ngOnInit(): void {
  }

  gotoHealth(){
    this.router.navigate(['health'])
  }

  public insertOem() {
    this.router.navigate(['app-insert-oem'])
  }
  

}
