import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { OemService } from 'src/app/service/oem.service';

@Component({
  selector: 'app-insert-oem',
  templateUrl: './insert-oem.component.html',
  styleUrls: ['./insert-oem.component.css']
})
export class InsertOemComponent implements OnInit {

  public oemdata = {
    "applicationName": "",
    "applicationOem": "",
    "heatlhDasboard": "",
    "l1": "",
    "l2": "",
    "oemSupportStatus": "",
    "serverIp": "",
        
  }


  constructor(
    // private oemService: OemService,
    private _snac: MatSnackBar,
    public router: Router,
    public oem:OemService
    ) { }


  ngOnInit(): void {
  }

  formSubmit() {
    this.oem.createOem(this.oemdata).subscribe(
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
 
  public gotoOem() {
    this.oem.oemDetails().subscribe(
      (oem_data: any) => {
        this.oem.setOem(oem_data);

        this.router.navigate(['app-health-dashboard-app-oem'])
      },
      (error) => {
        console.log('Error !');
        console.log(error);
        this._snac.open("You are not resiving oem data !! Try again", '', { duration: 3000 });
        // this._snack.open('You are not resiving oem data !! Try again', '', {
        //   duration: 3000,
        // });
      }
    );
    // this.router.navigate(['app-health-dashboard-oem'])
  }

  // events: string[] = [];

  // addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
  //   this.events.push(`${type}: ${event.value}`);
  // }

}
