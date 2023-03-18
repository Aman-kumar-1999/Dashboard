import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PortalService } from 'src/app/service/portal.service';

@Component({
  selector: 'app-super-admin-health-dashboard-portal',
  templateUrl: './super-admin-health-dashboard-portal.component.html',
  styleUrls: ['./super-admin-health-dashboard-portal.component.css']
})
export class SuperAdminHealthDashboardPortalComponent implements OnInit {

  
  public red1=false;
  public ambarg1=false;
  public green1=false;

  constructor(private _snac:MatSnackBar, private router:Router, public portal: PortalService) { }
 
  ngOnInit(): void {
    // alert(this.portal.getPortal().length);
    for (let i = 0; i < this.portal.getPortal().length ; i++) {
      console.log(this.portal.getPortal()[i].mountPointUtilization)
      if((this.portal.getPortal()[i].mountPointUtilization)<60){
        this.green1=true;
        console.log("the value of green : "+this.green1)
      }
      else if(((this.portal.getPortal()[i].mountPointUtilization)>=60)&&((this.portal.getPortal()[i].mountPointUtilization)<75)){
        this.ambarg1=true;
        console.log("the value of ambarg : "+this.ambarg1)
      }
      else if(((this.portal.getPortal()[i].mountPointUtilization)>=75)&&((this.portal.getPortal()[i].mountPointUtilization)<=100))
      {this.red1=true;}
      else{
      alert("Mount Point Utilization is greater then 100%");
      }
    }
    // alert(this.portal.getPortal().length());
  }

  public gotoHealth() {
    this.router.navigate(['app-super-admin-health'])
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

 

  public insertPortal() {
    this.router.navigate(['app-insert-super-admin-portal'])
  }


  public deletePortal(id:any){

    // this.portaldata1.Id=this._routr.snapshot.params['id'];

    console.log("deleted id: "+id)
    this.portal.deletePortal(id).subscribe(
      data =>  {
        // success  
        console.log(data);
        this._snac.open("Conguration !! You are Successfully deleted your data", '', { duration: 3000 });
        this.gotoPortal();

      },
      (error) => {
        // error
        console.log(error);
        this._snac.open("Conguration !! You are Successfully deleted your data", '', { duration: 3000 });
        this.gotoPortal();
      }
    )

  }

}
