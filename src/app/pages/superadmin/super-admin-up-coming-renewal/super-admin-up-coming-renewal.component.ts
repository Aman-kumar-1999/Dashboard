import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RenewalService } from 'src/app/service/renewal.service';

@Component({
  selector: 'app-super-admin-up-coming-renewal',
  templateUrl: './super-admin-up-coming-renewal.component.html',
  styleUrls: ['./super-admin-up-coming-renewal.component.css']
})
export class SuperAdminUpComingRenewalComponent implements OnInit {

  constructor(
    private _snac:MatSnackBar, private router:Router, public renewal:RenewalService) { }

  ngOnInit(): void {
  }

  gotoHealth(){
    this.router.navigate(['app-super-admin-health'])
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

  

  public insertRenewal() {
    this.router.navigate(['app-insert-super-admin-renewal'])
  }

  public deleteRenewal(id:any){

    // this.renewaldata1.Id=this._routr.snapshot.params['id'];

    console.log("deleted id: "+id)
    this.renewal.deleteRenewal(id).subscribe(
      data =>  {
        // success  
        console.log(data);
        this._snac.open("Conguration !! You are Successfully deleted your data", '', { duration: 3000 });
        this.gotoRenewal();

      },
      (error) => {
        // error
        console.log(error);
        this._snac.open("Error !! You are  not deleted your data", '', { duration: 3000 });
        this.gotoRenewal();
      }
    )

  }

}
