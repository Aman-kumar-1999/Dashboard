import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { InfraService } from 'src/app/service/infra.service';

@Component({
  selector: 'app-update-super-admin-infra',
  templateUrl: './update-super-admin-infra.component.html',
  styleUrls: ['./update-super-admin-infra.component.css']
})
export class UpdateSuperAdminInfraComponent implements OnInit {

  
  
  @Input() public infra1 = { "Id":''}


  constructor(
    // private cotsService: CotsService,
    private _snac: MatSnackBar,
    public router: Router,
    private _routr:ActivatedRoute,
    public infra:InfraService,
   
    
    ) { }
  


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


  


  ngOnInit(): void {

    this.infradata.id=this._routr.snapshot.params['id'];
    this.infradata.applicationName=this._routr.snapshot.params['applicationName'];
    this.infradata.datatime=this._routr.snapshot.params['dateTime'];
    this.infradata.diskUtilization=this._routr.snapshot.params['diskUtilization'];
    this.infradata.frequency=this._routr.snapshot.params['frequency'];
    this.infradata.healthDashboard=this._routr.snapshot.params['healthDashboard'];
    this.infradata.infoupdatedBy=this._routr.snapshot.params['infoUpdatedBy'];
    this.infradata.memory=this._routr.snapshot.params['memory'];
    this.infradata.serverIp=this._routr.snapshot.params['serverIp'];
    this.infradata.upu=this._routr.snapshot.params['cpu'];
    // this.infradata.diskSize=this._routr.snapshot.params['diskSize'];
    // this.infradata.usedDiskSpace=this._routr.snapshot.params['usedDiskSpace'];
    // this.infradata.freeDiskSpace=this._routr.snapshot.params['freeDiskSpace'];
    // this.infradata.mountedOn=this._routr.snapshot.params['mountedOn'];
    // alert(this.infradata.id);

  }



  formSubmit() {
    console.log("from submin data: "+this.infradata.id)
    this.infra.updateInfra(this.infradata.id,this.infradata).subscribe(
      (data: any) => {
        // success  
        console.log(data);
        this._snac.open("Conguration !! You are Successfully updated data", '', { duration: 3000 });
        this.gotoinfra();

      },
      (error) => {
        // error
        console.log(error);
        this._snac.open("Something went wrong !!!", '', { duration: 3000 });
        
      }
    )

   
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
        
      }
    );
   
  }

  

}
