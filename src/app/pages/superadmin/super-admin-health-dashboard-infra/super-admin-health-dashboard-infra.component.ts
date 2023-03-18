import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { InfraService } from 'src/app/service/infra.service';

@Component({
  selector: 'app-super-admin-health-dashboard-infra',
  templateUrl: './super-admin-health-dashboard-infra.component.html',
  styleUrls: ['./super-admin-health-dashboard-infra.component.css']
})
export class SuperAdminHealthDashboardInfraComponent implements OnInit {

  
  constructor(private _snac: MatSnackBar, private router:Router, public infra:InfraService) { }

  ngOnInit(): void {
  }

  gotoHealth(){
    this.router.navigate(['app-super-admin-health'])
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

  

  public insertInfra() {
    this.router.navigate(['app-insert-super-admin-infra'])
  }

  public deleteInfra(id:any){

    // this.infradata1.Id=this._routr.snapshot.params['id'];

    console.log("deleted id: "+id)
    this.infra.deleteInfra(id).subscribe(
      data =>  {
        // success  
        console.log(data);
        this._snac.open("Conguration !! You are Successfully deleted your data", '', { duration: 3000 });
        this.gotoinfra();

      },
      (error) => {
        // error
        console.log(error);
        this._snac.open("Conguration !! You are Successfully deleted your data", '', { duration: 3000 });
        this.gotoinfra();
      }
    )

  }

}
