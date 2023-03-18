import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CotsService } from 'src/app/service/cots.service';
import { HealthDashboardUpdataDatas } from './update-cots/HealthDashboardUpdateData';
// import url:('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');
@Component({
  selector: 'app-health-dashboard-cots',
  templateUrl: './health-dashboard-cots.component.html',
  styleUrls: ['./health-dashboard-cots.component.css']
})
export class HealthDashboardCotsComponent implements OnInit {

// cotsdata = HealthDashboardUpdataDatas;
// public cot1={
//   id:''                                       
//   // i.applicationName,
//   // i.cleanUpMountPoint ,
//   // i.dateTime ,
//   // i.frequency ,
//   // i.healthDashboard ,
//   // i.infoUpdatedBy ,
//   // i.mountPointUtilization ,
//   // i.serverIp ,
//   // i.serviceStatus ,
//   // i.thresholdMountPoint ,    
//   // i.diskSize ,
//   // i.usedDiskSpace ,
//   // i.freeDiskSpace ,
//   // i.mountedOn
// }
  
  constructor(
    private router: Router,
    public cots: CotsService,
  ) { }


  ngOnInit(): void {
  }

  public gotoHealth() {
    this.router.navigate(['health'])
  }

  public insertcots() {
    this.router.navigate(['app-insert-cots'])
  }

  // public updateCots(
  //   presentid: any,
    // applicationName: any,
    // cleanUpMountPoint: any,
    // dateTime: any,
    // frequency: any,
    // healthDashboard: any,
    // infoUpdatedBy: any,
    // mountPointUtilization: any,
    // serverIp: any,
    // serviceStatus: any,
    // thresholdMountPoint: any,
    // diskSize: any,
    // usedDiskSpace: any,
    // freeDiskSpace: any,
    // mountedOn: any
  // ) {
    
    // this.cotsdata.id= presentid;
    // console.log("This the value of id: "+this.cotsdata.id);
    // this.cotsdata.cotsdata.applicationName = applicationName;
    //   this.cotsdata.cotsdata.cleanUpMountPoint = cleanUpMountPoint;
    //   this.cotsdata.cotsdata.dateTime = dateTime;
    //   this.cotsdata.cotsdata.frequency = frequency;
    //   this.cotsdata.cotsdata.healthDashboard = healthDashboard;
    //   this.cotsdata.cotsdata.infoUpdatedBy = infoUpdatedBy;
    //   this.cotsdata.cotsdata.mountPointUtilization = mountPointUtilization;
    //   this.cotsdata.cotsdata.serverIp = serverIp;
    //   this.cotsdata.cotsdata.serviceStatus = serviceStatus;
    //   this.cotsdata.cotsdata.thresholdMountPoint = thresholdMountPoint;
    //   this.cotsdata.cotsdata.diskSize = diskSize;
    //   this.cotsdata.cotsdata.usedDiskSpace = usedDiskSpace;
    //   this.cotsdata.cotsdata.freeDiskSpace = freeDiskSpace;
    //   this.cotsdata.cotsdata.mountedOn = mountedOn;
    // console.log(this.i)
    // this.router.navigate(["'app-update-cots/'+ i.id"])
  // }

}
