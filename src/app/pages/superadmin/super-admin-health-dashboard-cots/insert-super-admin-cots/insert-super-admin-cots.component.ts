import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CotsService } from 'src/app/service/cots.service';
import {DatePipe} from '@angular/common';   
@Component({
  selector: 'app-insert-super-admin-cots',
  templateUrl: './insert-super-admin-cots.component.html',
  styleUrls: ['./insert-super-admin-cots.component.css']
})
export class InsertSuperAdminCotsComponent implements OnInit {


  public cotsdata = {
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
    // private cotsService: CotsService,
    private _snac: MatSnackBar,
    public router: Router,
    public cots:CotsService,
    public datepipe: DatePipe
    ) { }


  ngOnInit(): void {
  }

  formSubmit() {
    this.cots.createCots(this.cotsdata).subscribe(
      (data: any) => {
        // success  
        console.log(data);
        this._snac.open("Conguration !! You are Successfully inserted new data", '', { duration: 3000 });
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
    this.router.navigate(['app-health-dashboard-cots'])
  }

  // events: string[] = [];

  // addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
  //   this.events.push(`${type}: ${event.value}`);
  // }

}
