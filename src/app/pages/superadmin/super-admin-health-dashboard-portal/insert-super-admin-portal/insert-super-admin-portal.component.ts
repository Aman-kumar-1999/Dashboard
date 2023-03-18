import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PortalService } from 'src/app/service/portal.service';

@Component({
  selector: 'app-insert-super-admin-portal',
  templateUrl: './insert-super-admin-portal.component.html',
  styleUrls: ['./insert-super-admin-portal.component.css']
})
export class InsertSuperAdminPortalComponent implements OnInit {

  
  public portaldata = {
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


  constructor(
    // private portalService: PortalService,
    private _snac: MatSnackBar,
    public router: Router,
    public portal:PortalService
    ) { }


  ngOnInit(): void {
  }

  formSubmit() {
    this.portal.createPortal(this.portaldata).subscribe(
      (data: any) => {
        // success  
        console.log(data);
        this._snac.open("Conguration !! You are Successfully inserted new data", '', { duration: 3000 });
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
