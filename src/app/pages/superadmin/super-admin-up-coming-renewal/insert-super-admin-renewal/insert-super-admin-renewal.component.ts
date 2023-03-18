import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RenewalService } from 'src/app/service/renewal.service';

@Component({
  selector: 'app-insert-super-admin-renewal',
  templateUrl: './insert-super-admin-renewal.component.html',
  styleUrls: ['./insert-super-admin-renewal.component.css']
})
export class InsertSuperAdminRenewalComponent implements OnInit {

  public renewaldata = {
    "applicationInfra": "",
    "renewalType": "",
    "dueData": "",
    "owner": "",
    "infoUpdateBy": "",
  }


  constructor(
    // private renewalService: RenewalService,
    private _snac: MatSnackBar,
    public router: Router,
    public renewal:RenewalService
    ) { }


  ngOnInit(): void {
  }

  formSubmit() {
    this.renewal.createRenewal(this.renewaldata).subscribe(
      (data: any) => {
        // success  
        console.log(data);
        this._snac.open("Conguration !! You are Successfully inserted new data", '', { duration: 3000 });
        
        this.gotoRenewal();
      },
      (error) => {
        // error
        console.log(error);
        this._snac.open("Something went wrong !!!", '', { duration: 3000 });
        
      }
    )

    // alert("Form Submit");
  }
 
  public gotoRenewal() {
    this.renewal.renewalDetails().subscribe(
      (renewal_data: any) => {
        this.renewal.setRenewal(renewal_data);

        this.router.navigate(['app-super-admin-up-coming-renewal'])
      },
      (error) => {
        console.log('Error !');
        console.log(error);
        this._snac.open("You are not resiving renewal data !! Try again", '', { duration: 3000 });
        // this._snack.open('You are not resiving renewal data !! Try again', '', {
        //   duration: 3000,
        // });
      }
    );
    // this.router.navigate(['app-health-dashboard-renewal'])
  }

  // events: string[] = [];

  // addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
  //   this.events.push(`${type}: ${event.value}`);
  // }

}
