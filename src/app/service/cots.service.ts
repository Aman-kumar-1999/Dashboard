import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HealthDashboardUpdataData } from '../pages/admin/health-dashboard-cots/update-cots/HealthDashboardUpdateData';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})


export class CotsService {



  constructor(private http: HttpClient) { }

  public cotsDetails() {
    console.log();
    // weblogic 
    // return this.http.get(`${baseUrl}/healthdashboardcots/cots`);

    return this.http.get(`${baseUrl}/healthdashboardcots`);
  }

  public createCots(cotsdata:any){
    // weblogic
    return this.http.post(`${baseUrl}/healthdashboardcots/`,cotsdata);

    // return this.http.post(`${baseUrl}/healthdashboardcots`,cotsdata);
  }

  public updateCots(id:any,cotsdata:any){
    return this.http.put(`${baseUrl}/healthdashboardcots/${id}`,cotsdata);
  }

  public deleteCots(id:any){
    return this.http.delete(`${baseUrl}/healthdashboardcots/${id}`)
  }
  
  // public setCotsid(Cotsid:HealthDashboardUpdataData){

  //     // this.Cotsid.cotsdata.id;
  // }


  //set setCots
  public setCots(cots: any) {
    localStorage.setItem('cots', JSON.stringify(cots));
    console.log("set value in localStorage is : " + localStorage);
  }

  //getCots
  public getCots() {
    let userStr = localStorage.getItem('cots');
    console.log("set value in userStr is : " + userStr);
    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      // this.logout();
      return null;
    }
  }

}
