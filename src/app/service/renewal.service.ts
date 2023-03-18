import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class RenewalService {

  constructor(private http: HttpClient) { }

  public renewalDetails() {
    console.log();
    // weblogic
    // return this.http.get(`${baseUrl}/upcommingrenewal/renewal`);

    return this.http.get(`${baseUrl}/upcominguenewal`);
  }

  public createRenewal(renewaldata:any){
    // weblogic 
    // return this.http.post(`${baseUrl}/upcommingrenewal/`,renewaldata);

    return this.http.post(`${baseUrl}/upcominguenewal/`,renewaldata);
  }
  
  public updateRenewal(id:any,renewaldata:any){
    return this.http.put(`${baseUrl}/upcominguenewal/${id}`,renewaldata);
  }

  public deleteRenewal(id:any){
    return this.http.delete(`${baseUrl}/upcominguenewal/${id}`);
  }

  //set setRenewal
  public setRenewal(renewal: any) {
    localStorage.setItem('renewal', JSON.stringify(renewal));
    console.log("set value in localStorage is : " + localStorage);
  }

  //getRenewal
  public getRenewal() {
    let userStr = localStorage.getItem('renewal');
    console.log("set value in userStr is : " + userStr);
    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      // this.logout();
      return null;
    }
  }
}
