import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class PortalService {

  constructor(private http: HttpClient) { }

  public portalDetails() {
    console.log();
    // weblogic 
    // return this.http.get(`${baseUrl}/healthdashboardportal/portal`);

    return this.http.get(`${baseUrl}/healthdashboardportal`);
  }

  public createPortal(portaldata:any){
    // weblogic 
    return this.http.post(`${baseUrl}/healthdashboardportal/`,portaldata);

    // return this.http.post(`${baseUrl}/healthdashboardportal`,portaldata);
  }

  public updatePortal(id:any,portaldata:any){
    return this.http.put(`${baseUrl}/healthdashboardportal/${id}`,portaldata);
  }

  public deletePortal(id:any){
    return this.http.delete(`${baseUrl}/healthdashboardportal/${id}`);
  }


  //set setPortal
  public setPortal(portal: any) {
    localStorage.setItem('portal', JSON.stringify(portal));
    console.log("set value in localStorage is : " + localStorage);
  }

  //getPortal
  public getPortal() {
    let userStr = localStorage.getItem('portal');
    console.log("set value in userStr is : " + userStr);
    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      // this.logout();
      return null;
    }
  }

  
}
