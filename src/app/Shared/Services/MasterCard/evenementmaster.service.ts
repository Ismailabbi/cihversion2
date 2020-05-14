import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EvenementmasterService {

  constructor(private httpClient: HttpClient) { 
  }



  get_events():Observable<any[]>{
    return this.httpClient.get<any[]>('http://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/events')
  }
  get_eventNum_event():Observable<any[]>{
    return this.httpClient.get<any[]>('http://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/unique/EventID')
  
  }
  get_Name_event():Observable<any[]>{
    return this.httpClient.get<any[]>('http://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/unique/EventName')

  }
  get_serviceId_event():Observable<any[]>{
    return this.httpClient.get<any[]>('http://effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/unique/ServiceID_events')

  }

}
