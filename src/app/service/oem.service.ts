import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class OemService {

  constructor(private http: HttpClient) { }

  public oemDetails() {
  console.log();
  // weblogic
  // return this.http.get(`${baseUrl}/healthdashboardappoem/oem`);

  return this.http.get(`${baseUrl}/healthdashboardappoem`);
}

public createOem(oemdata:any){
  // weblogic 
  return this.http.post(`${baseUrl}/healthdashboardappoem/`,oemdata);

  // return this.http.post(`${baseUrl}/healthdashboardappoem`,oemdata);
}

public updateOem(id:any,oemdata:any){
  return this.http.put(`${baseUrl}/healthdashboardappoem/${id}`,oemdata);
}

public deleteOem(id:any){
  return this.http.delete(`${baseUrl}/healthdashboardappoem/${id}`);
}

  //set setOem
  public setOem(oem:any) {
    localStorage.setItem('oem', JSON.stringify(oem));
  console.log("set value in localStorage is : " + localStorage);
}

  //getOem
  public getOem() {
  let userStr = localStorage.getItem('oem');
  console.log("set value in userStr is : " + userStr);
  if (userStr != null) {
    return JSON.parse(userStr);
  } else {
    // this.logout();
    return null;
  }
}
}
