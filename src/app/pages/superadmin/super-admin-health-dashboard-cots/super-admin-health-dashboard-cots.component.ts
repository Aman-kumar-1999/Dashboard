import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CotsService } from 'src/app/service/cots.service';

@Component({
  selector: 'app-super-admin-health-dashboard-cots',
  templateUrl: './super-admin-health-dashboard-cots.component.html',
  styleUrls: ['./super-admin-health-dashboard-cots.component.css']
})
export class SuperAdminHealthDashboardCotsComponent implements OnInit {

  
  constructor(
    private _snac: MatSnackBar,
    private router: Router,
    public cots: CotsService,
  ) { }


  ngOnInit(): void {
  }

  public gotoHealth() {
    this.router.navigate(['app-super-admin-health'])
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
    // this.router.navigate(['app-health-dashboard-cots'])
  }

  

  public insertcots() {
    this.router.navigate(['app-insert-super-admin-cots'])
  }

  public deleteCots(id:any){

    // this.cotsdata1.Id=this._routr.snapshot.params['id'];

    console.log("deleted id: "+id)
    this.cots.deleteCots(id).subscribe(
      data =>  {
        // success  
        console.log(data);
        this._snac.open("Conguration !! You are Successfully deleted your data", '', { duration: 3000 });
        this.gotocots();

      },
      (error) => {
        // error
        console.log(error);
        this._snac.open("Conguration !! You are Successfully deleted your data", '', { duration: 3000 });
        this.gotocots();
      }
    )

  }

  

}
