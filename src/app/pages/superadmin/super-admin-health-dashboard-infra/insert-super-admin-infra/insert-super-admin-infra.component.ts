import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { InfraService } from 'src/app/service/infra.service';





@Component({
  selector: 'app-insert-super-admin-infra',
  templateUrl: './insert-super-admin-infra.component.html',
  styleUrls: ['./insert-super-admin-infra.component.css']
})
export class InsertSuperAdminInfraComponent implements OnInit {

  public infradata 
  = {
    "id":'',
    "healthDashboard": "",
    "datatime": "",
    "applicationName": "",
    "serverIp": "",
    "frequency": "",
    "infoupdatedBy": "",
    "upu": "",
    "memory": "",
    "diskUtilization": ""
    // "diskSize": "",
    // "usedDiskSpace": "",
    // "freeDiskSpace": "",
    // "mountedOn": ""
  }


  constructor(
    
    private _snac: MatSnackBar,
    public router: Router,
    public infra: InfraService
    ) { }


  ngOnInit(): void {
  }

  formSubmit() {
    this.infra.createInfra(this.infradata).subscribe(
      (data: any) => {
        // success  
        console.log(data);
        this._snac.open("Conguration !! You are Successfully inserted new data", '', { duration: 3000 });
        this.gotoinfra();

      },
      (error) => {
        // error
        console.log(error);
        this._snac.open("Something went wrong !!!", '', { duration: 3000 });
        
      }
    )

    // alert("Form Submit");
  }
 
  public gotoinfra() {
    this.infra.infraDetails().subscribe(
      (infra_data: any) => {
        this.infra.setInfra(infra_data);

        this.router.navigate(['app-super-admin-health-dashboard-infra'])
      },
      (error) => {  
        console.log('Error !');
        console.log(error);
        this._snac.open("You are not resiving infra data !! Try again", '', { duration: 3000 });
        // this._snack.open('You are not resiving infra data !! Try again', '', {
        //   duration: 3000,
        // });
      }
    );
    // this.router.navigate(['app-health-dashboard-infra'])
  }

  // events: string[] = [];

  // addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
  //   this.events.push(`${type}: ${event.value}`);
  // }

}
