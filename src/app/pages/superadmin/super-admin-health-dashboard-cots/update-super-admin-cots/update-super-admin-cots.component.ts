import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CotsService } from 'src/app/service/cots.service';

@Component({
  selector: 'app-update-super-admin-cots',
  templateUrl: './update-super-admin-cots.component.html',
  styleUrls: ['./update-super-admin-cots.component.css']
})
export class UpdateSuperAdminCotsComponent implements OnInit {

  
  @Input() public cotsdata1 = { "Id":''}


  constructor(
    // private cotsService: CotsService,
    private _snac: MatSnackBar,
    public router: Router,
    private _routr:ActivatedRoute,
    public cots:CotsService,
   
    
    ) { }
  


  public cotsdata 
  = {
    "id":'',
    "applicationName": '',
    "cleanUpMountPoint": "85%",
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

    this.cotsdata.id=this._routr.snapshot.params['id'];
    this.cotsdata.applicationName=this._routr.snapshot.params['applicationName'];
    this.cotsdata.cleanUpMountPoint=this._routr.snapshot.params['cleanUpMountPoint'];
    this.cotsdata.dateTime=this._routr.snapshot.params['dateTime'];
    this.cotsdata.frequency=this._routr.snapshot.params['frequency'];
    this.cotsdata.healthDashboard=this._routr.snapshot.params['healthDashboard'];
    this.cotsdata.infoUpdatedBy=this._routr.snapshot.params['infoUpdatedBy'];
    this.cotsdata.mountPointUtilization=this._routr.snapshot.params['mountPointUtilization'];
    this.cotsdata.serverIp=this._routr.snapshot.params['serverIp'];
    this.cotsdata.serviceStatus=this._routr.snapshot.params['serviceStatus'];
    this.cotsdata.thresholdMountPoint=this._routr.snapshot.params['thresholdMountPoint'];
    this.cotsdata.diskSize=this._routr.snapshot.params['diskSize'];
    this.cotsdata.usedDiskSpace=this._routr.snapshot.params['usedDiskSpace'];
    this.cotsdata.freeDiskSpace=this._routr.snapshot.params['freeDiskSpace'];
    this.cotsdata.mountedOn=this._routr.snapshot.params['mountedOn'];
    // alert(this.cotsdata1.Id);
    // this.cotsdata=this.cots.getCots()[this.cotsdata1.Id];

  }



  formSubmit() {
    console.log("from submin data: "+this.cotsdata.id)
    this.cots.updateCots(this.cotsdata.id,this.cotsdata).subscribe(
      (data: any) => {
        // success  
        console.log(data);
        this._snac.open("Conguration !! You are Successfully updated data", '', { duration: 3000 });
        this.gotocots();

      },
      (error) => {
        // error
        console.log(error);
        this._snac.open("Something went wrong !!!", '', { duration: 3000 });
        
      }
    )

    // alert("Form Submit");
  }
 
  public gotocots() {
    this.cots.cotsDetails().subscribe(
      (cots_data: any) => {
        this.cots.setCots(cots_data);

        this.router.navigate(['app-super-admin-health-dashboard-cots'])
      },
      (error) => {
        console.log('Error !');
        console.log(error);
        this._snac.open("You are not resiving cots data !! Try again", '', { duration: 3000 });
        // this._snack.open('You are not resiving cots data !! Try again', '', {
        //   duration: 3000,
        // });
      }
    );
    // this.router.navigate(['app-health-dashboard-cots'])
  }

  // events: string[] = [];

  // addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
  //   this.events.push(`${type}: ${event.value}`);
  // }

}
