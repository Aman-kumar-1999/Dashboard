import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { RenewalService } from 'src/app/service/renewal.service';

@Component({
  selector: 'app-update-super-admin-renewal',
  templateUrl: './update-super-admin-renewal.component.html',
  styleUrls: ['./update-super-admin-renewal.component.css']
})
export class UpdateSuperAdminRenewalComponent implements OnInit {

  @Input() public renewaldata1 = { "Id":''}


  constructor(
    // private renewalService: RenewalService,
    private _snac: MatSnackBar,
    public router: Router,
    private _routr:ActivatedRoute,
    public renewal:RenewalService,
   
    
    ) { }
  


  public renewaldata 
  = {
    "id":'',
    "applicationInfra": "",
    "dueData": "",
    "infoUpdateBy": "",
    "owner": "",
    "renewalType": "",
  }


  


  ngOnInit(): void {

    this.renewaldata.id=this._routr.snapshot.params['id'];
    this.renewaldata.applicationInfra=this._routr.snapshot.params['applicationInfra'];
    this.renewaldata.dueData=this._routr.snapshot.params['dueDate'];
    this.renewaldata.infoUpdateBy=this._routr.snapshot.params['infoUpdatedBy'];
    this.renewaldata.owner=this._routr.snapshot.params['owner'];
    this.renewaldata.renewalType=this._routr.snapshot.params['renewalType'];
    // alert(this.renewaldata1.Id);
    // this.renewaldata=this.renewal.getrenewal()[this.renewaldata1.Id];

  }



  formSubmit() {
    console.log("from submin data: "+this.renewaldata.id)
    this.renewal.updateRenewal(this.renewaldata.id,this.renewaldata).subscribe(
      (data: any) => {
        // success  
        console.log(data);
        this._snac.open("Conguration !! You are Successfully updated data", '', { duration: 3000 });
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
