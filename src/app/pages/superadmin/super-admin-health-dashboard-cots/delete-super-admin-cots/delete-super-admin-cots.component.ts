import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CotsService } from 'src/app/service/cots.service';

@Component({
  selector: 'app-delete-super-admin-cots',
  templateUrl: './delete-super-admin-cots.component.html',
  styleUrls: ['./delete-super-admin-cots.component.css']
})
export class DeleteSuperAdminCotsComponent implements OnInit {

  @Input() public cotsdata1 = { "Id":''}

  stringresonse!:string;

  constructor(
    // private cotsService: CotsService,
    private _snac: MatSnackBar,
    public router: Router,
    private _routr:ActivatedRoute,
    public cots:CotsService,
   
    
    ) { }

  ngOnInit(): void {

    this.cotsdata1.Id=this._routr.snapshot.params['id'];

    console.log("deleted id: "+this.cotsdata1.Id)
    this.cots.deleteCots(this.cotsdata1.Id).subscribe(
      data =>  {
        // success  
        console.log(data);
        this._snac.open("Conguration !! You are Successfully deleted your data", '', { duration: 3000 });
        this.gotocots();

      },
      (error) => {
        // error
        console.log(error);
        this._snac.open("Something went wrong !!!", '', { duration: 3000 });
        
      }
    )

    // alert("Form Submit");
  

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

}
