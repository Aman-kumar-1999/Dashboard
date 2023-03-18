import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { OemService } from 'src/app/service/oem.service';

@Component({
  selector: 'app-super-admin-health-dashboard-app-oem',
  templateUrl: './super-admin-health-dashboard-app-oem.component.html',
  styleUrls: ['./super-admin-health-dashboard-app-oem.component.css']
})
export class SuperAdminHealthDashboardAppOemComponent implements OnInit {
  

  constructor(
    private _snac:MatSnackBar,
    private router: Router,
    public oem:OemService,
    ) { }

  ngOnInit(): void {
  }

  gotoHealth(){
    this.router.navigate(['app-super-admin-health'])
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

  public insertOem() {
    this.router.navigate(['app-insert-super-admin-oem'])
  }

  public deleteOem(id:any){

    // this.oemdata1.Id=this._routr.snapshot.params['id'];

    console.log("deleted id: "+id)
    this.oem.deleteOem(id).subscribe(
      data =>  {
        // success  
        console.log(data);
        this._snac.open("Conguration !! You are Successfully deleted your data", '', { duration: 3000 });
        this.gotoOem();

      },
      (error) => {
        // error
        console.log(error);
        this._snac.open("Conguration !! You are Successfully deleted your data", '', { duration: 3000 });
        this.gotoOem();
      }
    )

  }


}
