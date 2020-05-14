import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicemasterService {

  constructor(private httpClient: HttpClient) { }
  get_services():Observable<any[]>{
    return this.httpClient.get<any[]>('http://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/service')
  }
 getservicename():Observable<any[]>{
    return this.httpClient.get<any[]>("http://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/unique/service")
  }
  gettypeservice():Observable<any[]>
  {
    return this.httpClient.get<any[]>("http://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/unique/typedeservice")
  }
}
