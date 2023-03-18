import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class InfraService {

  constructor(private http: HttpClient) { }

  public infraDetails() {
    console.log();
    // weblogic 
    // return this.http.get(`${baseUrl}/healthdashboardinfra/infra`);

    return this.http.get(`${baseUrl}/healthdashboardinfra`);
  }

  public createInfra(infradata:any){

    // weblogic
    return this.http.post(`${baseUrl}/healthdashboardinfra/`,infradata);

    // return this.http.post(`${baseUrl}/healthdashboardinfra`,infradata);
  }

  public updateInfra(id:any,infradata:any){
    return this.http.put(`${baseUrl}/healthdashboardinfra/${id}`,infradata);
  }

  public deleteInfra(id:any){
    return this.http.delete(`${baseUrl}/healthdashboardinfra/${id}`);
  }

  //set setInfra
  public setInfra(infra: any) {
    localStorage.setItem('infra', JSON.stringify(infra));
    console.log("set value in localStorage is : " + localStorage);
  }

  //getInfra
  public getInfra() {
    let userStr = localStorage.getItem('infra');
    console.log("set value in userStr is : " + userStr);
    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      // this.logout();
      return null;
    }
  }

}
