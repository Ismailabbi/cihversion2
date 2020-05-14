import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FacturesService {
  Url:string="http://178.170.94.109:8084/services/jdl3/api/facture-mcis"
 Factures:any []
  constructor(private httpClient: HttpClient){
    
  }
  get_factures(){
    return this.httpClient.get<any[]>(this.Url)
    
  }
  get_facutresP():Observable<any[]>{
    return this.httpClient.get<any[]>('http://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/facture_pre')
  }
}
