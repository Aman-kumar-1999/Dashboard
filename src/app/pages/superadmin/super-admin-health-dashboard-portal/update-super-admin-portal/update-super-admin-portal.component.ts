import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { PortalService } from 'src/app/service/portal.service';

@Component({
  selector: 'app-update-super-admin-portal',
  templateUrl: './update-super-admin-portal.component.html',
  styleUrls: ['./update-super-admin-portal.component.css']
})
export class UpdateSuperAdminPortalComponent implements OnInit {

  @Input() public portaldata1 = { "Id":''}


  constructor(
    // private portalService: portalService,
    private _snac: MatSnackBar,
    public router: Router,
    private _routr:ActivatedRoute,
    public portal:PortalService,
   
    
    ) { }
  


  public portaldata 
  = {
    "id":'',
    "applicationName": "",
    "cleanUpMountPoint": "",
    "dateTime": "",
    "frequency": "",
    "healthDashboard": "",
    "infoUpdatedBy": "",
    "mountPointUtilization": "",
    "serverIp": "",
    "serviceStatus": "",
    "thresholdMountPoint": "",
    "diskSize": "",
    "usedDiskSpace": "",
    "freeDiskSpace": "",
    "mountedOn": ""
  }


  


  ngOnInit(): void {

    this.portaldata.id=this._routr.snapshot.params['id'];
    this.portaldata.applicationName=this._routr.snapshot.params['applicationName'];
    this.portaldata.cleanUpMountPoint=this._routr.snapshot.params['cleanUpMountPoint'];
    this.portaldata.dateTime=this._routr.snapshot.params['dateTime'];
    this.portaldata.frequency=this._routr.snapshot.params['frequency'];
    this.portaldata.healthDashboard=this._routr.snapshot.params['healthDashboard'];
    this.portaldata.infoUpdatedBy=this._routr.snapshot.params['infoUpdatedBy'];
    this.portaldata.mountPointUtilization=this._routr.snapshot.params['mountPointUtilization'];
    this.portaldata.serverIp=this._routr.snapshot.params['serverIp'];
    this.portaldata.serviceStatus=this._routr.snapshot.params['serviceStatus'];
    this.portaldata.thresholdMountPoint=this._routr.snapshot.params['thresholdMountPoint'];
    this.portaldata.diskSize=this._routr.snapshot.params['diskSize'];
    this.portaldata.usedDiskSpace=this._routr.snapshot.params['usedDiskSpace'];
    this.portaldata.freeDiskSpace=this._routr.snapshot.params['freeDiskSpace'];
    this.portaldata.mountedOn=this._routr.snapshot.params['mountedOn'];
    // alert(this.portaldata1.Id);
    // this.portaldata=this.portal.getportal()[this.portaldata1.Id];

  }



  formSubmit() {
    console.log("from submin data: "+this.portaldata.id)
    this.portal.updatePortal(this.portaldata.id,this.portaldata).subscribe(
      (data: any) => {
        // success  
        console.log(data);
        this._snac.open("Conguration !! You are Successfully updated data", '', { duration: 3000 });
        
        this.gotoPortal();

      },
      (error) => {
        // error
        console.log(error);
        this._snac.open("Something went wrong !!!", '', { duration: 3000 });
        
      }
    )

    // alert("Form Submit");
  }
 
  public gotoPortal() {
    this.portal.portalDetails().subscribe(
      (portal_data: any) => {
        this.portal.setPortal(portal_data);

        this.router.navigate(['app-super-admin-health-dashboard-portal'])
      },
      (error) => {
        console.log('Error !');
        console.log(error);
        this._snac.open("You are not resiving portal data !! Try again", '', { duration: 3000 });
        // this._snack.open('You are not resiving portal data !! Try again', '', {
        //   duration: 3000,
        // });
      }
    );
    // this.router.navigate(['app-health-dashboard-portal'])
  }

  // events: string[] = [];

  // addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
  //   this.events.push(`${type}: ${event.value}`);
  // }
}
