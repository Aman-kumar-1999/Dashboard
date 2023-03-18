import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { OemService } from 'src/app/service/oem.service';

@Component({
  selector: 'app-update-super-admin-oem',
  templateUrl: './update-super-admin-oem.component.html',
  styleUrls: ['./update-super-admin-oem.component.css']
})
export class UpdateSuperAdminOemComponent implements OnInit {

  

  @Input() public oemdata1 = { "Id":''}


  constructor(
    // private oemService: OemService,
    private _snac: MatSnackBar,
    public router: Router,
    private _routr:ActivatedRoute,
    public oem:OemService,
   
    
    ) { }
  


  public oemdata 
  = {
    "id":'',
    "applicationName": "",
    "applicationOem": "",
    "heatlhDasboard": "",
    "l1": "",
    "l2": "",
    "oemSupportStatus": "",
    "serverIp": "",
  }


  


  ngOnInit(): void {

    this.oemdata.id=this._routr.snapshot.params['id'];
    this.oemdata.applicationName=this._routr.snapshot.params['applicationName'];
    this.oemdata.applicationOem=this._routr.snapshot.params['applicationOem'];
    this.oemdata.heatlhDasboard=this._routr.snapshot.params['heatlhDasboard'];
    this.oemdata.l1=this._routr.snapshot.params['l1'];
    this.oemdata.l2=this._routr.snapshot.params['l2'];
    this.oemdata.oemSupportStatus=this._routr.snapshot.params['oemSupportStatus'];
    this.oemdata.serverIp=this._routr.snapshot.params['serverIp'];
    // alert(this.oemdata1.Id);
    // this.oemdata=this.oem.getoem()[this.oemdata1.Id];

  }



  formSubmit() {
    console.log("from submin data: "+this.oemdata.id)
    this.oem.updateOem(this.oemdata.id,this.oemdata).subscribe(
      (data: any) => {
        // success  
        console.log(data);
        this._snac.open("Conguration !! You are Successfully updated data", '', { duration: 3000 });
        this.gotoOem();

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

        this.router.navigate(['app-super-admin-health-dashboard-app-oem'])
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
