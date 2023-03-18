import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CotsService } from 'src/app/service/cots.service';
import { InfraService } from 'src/app/service/infra.service';
import { OemService } from 'src/app/service/oem.service';
import { PortalService } from 'src/app/service/portal.service';
import { RenewalService } from 'src/app/service/renewal.service';

@Component({
  selector: 'app-user-health',
  templateUrl: './user-health.component.html',
  styleUrls: ['./user-health.component.css']
})
export class UserHealthComponent implements OnInit {

 
  constructor(
    private router: Router,
    public cots: CotsService,
    public oem:OemService,
    public infra:InfraService,
    public portal:PortalService,
    public renewal:RenewalService,
    private snack: MatSnackBar,

  ) { }

  ngOnInit(): void {
  }

  public healthdashboardcots() {
    this.cots.cotsDetails().subscribe(
      (cots_data: any) => {
        this.cots.setCots(cots_data);

        this.router.navigate(['app-user-health-dashboard-cots'])
      },
      (error) => {
        console.log('Error !');
        console.log(error);
        this.snack.open('You are not resiving cots data !! Try again', '', {
          duration: 3000,
        });
      }
    );
  }
  public healthdashboardinfra() {
    this.infra.infraDetails().subscribe(
      (infra_data: any) => {
        this.infra.setInfra(infra_data);

        this.router.navigate(['app-user-health-dashboard-infra'])
      },
      (error) => {
        console.log('Error !');
        console.log(error);
        this.snack.open('You are not resiving Infra data !! Try again', '', {
          duration: 3000,
        });
      }
    );
  }
  public healthdashboardportal() {

    this.portal.portalDetails().subscribe(
      (portal_data: any) => {
        this.portal.setPortal(portal_data);

        this.router.navigate(['app-user-health-dashboard-portal'])
      },
      (error) => {
        console.log('Error !');
        console.log(error);
        this.snack.open('You are not resiving Portal data !! Try again', '', {
          duration: 3000,
        });
      }
    );
  }
  public healthdashboardoem() {

    this.oem.oemDetails().subscribe(
      (oem_data: any) => {
        this.oem.setOem(oem_data);

        this.router.navigate(['app-user-health-dashboard-app-oem'])
      },
      (error) => {
        console.log('Error !');
        console.log(error);
        this.snack.open('You are not resiving Oem data !! Try again', '', {
          duration: 3000,
        });
      }
    );
    
  }
  public upcomingrenewal() {

    
    this.renewal.renewalDetails().subscribe(
      (renewal_data: any) => {
        this.renewal.setRenewal(renewal_data);

        this.router.navigate(['app-user-up-coming-renewal'])
      },
      (error) => {
        console.log('Error !');
        console.log(error);
        this.snack.open('You are not resiving Renewal data !! Try again', '', {
          duration: 3000,
        });
      }
    );

  }

}
