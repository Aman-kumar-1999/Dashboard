import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RenewalService } from 'src/app/service/renewal.service';

@Component({
  selector: 'app-up-coming-renewal',
  templateUrl: './up-coming-renewal.component.html',
  styleUrls: ['./up-coming-renewal.component.css']
})
export class UpComingRenewalComponent implements OnInit {

  constructor(private router:Router, public renewal:RenewalService) { }

  ngOnInit(): void {
  }

  gotoHealth(){
    this.router.navigate(['health'])
  }

  public insertRenewal() {
    this.router.navigate(['app-insert-renewal'])
  }

}
