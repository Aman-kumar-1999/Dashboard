import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfraService } from 'src/app/service/infra.service';

@Component({
  selector: 'app-health-dashboard-infra',
  templateUrl: './health-dashboard-infra.component.html',
  styleUrls: ['./health-dashboard-infra.component.css']
})
export class HealthDashboardInfraComponent implements OnInit {

  
// cotsdata = HealthDashboardUpdataDatas;
// public cot1={
//   id:''                                       
//   i.applicationName,
//   i.cleanUpMountPoint ,
//   i.dateTime ,
//   i.frequency ,
//   i.healthDashboard ,
//   i.infoUpdatedBy ,
//   i.mountPointUtilization ,
//   i.serverIp ,
//   i.serviceStatus ,
//   i.thresholdMountPoint ,    
//   i.diskSize ,
//   i.usedDiskSpace ,
//   i.freeDiskSpace ,
//   i.mountedOn
// }
  

  constructor(private router:Router, public infra:InfraService) { }

  ngOnInit(): void {
  }

  gotoHealth(){
    this.router.navigate(['health'])
  }

  public insertInfra() {
    this.router.navigate(['app-insert-infra'])
  }

}
