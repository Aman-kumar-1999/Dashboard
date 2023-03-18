import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CotsService } from 'src/app/service/cots.service';
// import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';

// import * as _moment from 'moment';
// import {FormControl} from '@angular/forms';
// import {default as _rollupMoment} from 'moment';
// import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
// import { MatDatepickerInputEvent } from '@angular/material/datepicker';

// const moment = _rollupMoment || _moment;

// export const MY_FORMATS = {
//   parse: {
//     dateInput: 'LL',
//   },
//   display: {
//     dateInput: 'LL',
//     monthYearLabel: 'DD MMMM YYYY',
//     dateA11yLabel: 'LL',
//     monthYearA11yLabel: 'DD MMMM YYYY',
//   },
// };

@Component({
  selector: 'app-insert-cots',
  templateUrl: './insert-cots.component.html',
  styleUrls: ['./insert-cots.component.css'],
  // providers: [
  //   // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
  //   // application's root module. We provide it at the component level here, due to limitations of
  //   // our example generation script.
  //   {
  //     provide: DateAdapter,
  //     useClass: MomentDateAdapter,
  //     deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
  //   },

  //   {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  // ],
})
export class InsertCotsComponent implements OnInit {
  // date = new FormControl(moment());

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
    private cotsService: CotsService,
    private _snac: MatSnackBar,
    public router: Router,
    public cots:CotsService
    ) { }


  ngOnInit(): void {
  }

  formSubmit() {
    this.cotsService.createCots(this.cotsdata).subscribe(
      (data: any) => {
        // success  
        console.log(data);
        this._snac.open("Conguration !! You are Successfully inserted new data", '', { duration: 3000 });
        

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

        this.router.navigate(['app-health-dashboard-cots'])
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
