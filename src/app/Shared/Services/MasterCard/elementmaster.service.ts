import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ElementmasterService {
  listecategorie:any[]
   listprocessus:any[]
   listefamille:any[]
   listecanal:any[]
   listeAcceptance:any[]
   listOrigine:any[]
   listclaffisication:any[]
   listService:any[]
   listeventD:any[]
   datamois=['All','Janvier','Fevrier','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Decembre']

  constructor(private httpClient: HttpClient) { 

    this.httpClient.get<any[]>('http://effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/unique/Categorie').subscribe(data=>{
      this.listecategorie=data
      this.listecategorie.unshift({'Categorie':'All'})

    })

    this.httpClient.get<any[]>('http://effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/unique/Processus').subscribe(data=>{
       this.listprocessus=data
       this.listprocessus.unshift({'Processus':'All'})

    })
    this.httpClient.get<any[]>('http://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/unique/Famille').subscribe(data=>{
      this.listefamille=data
      this.listefamille.unshift({'Famille':'All'})
    })
    this.httpClient.get<any[]>('http://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/unique/Canal').subscribe(data=>{
      this.listecanal=data
      this.listecanal.unshift({'Canal':'All'})

    }
    )
    this.httpClient.get<any[]>('http://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/unique/Acceptance').subscribe(data=>{
      this.listeAcceptance=data
      this.listeAcceptance.unshift({'Acceptance':'All'})

    })

    
    


    this.httpClient.get<any[]>("http://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/unique/Origine").subscribe(data=>{
      this.listOrigine=data
      this.listOrigine.unshift({'Origine':'All'})


    })
this.httpClient.get<any[]>("http://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/unique/classification").subscribe(data=>{
    this.listclaffisication=data
    this.listclaffisication.unshift({'Classification':'All'})
})

   this.httpClient.get<any[]>('http://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/unique/ServiceDescription').subscribe(data=>{
     this.listService=data
     this.listService.unshift({'ServiceCodeDescription':'All'})
   })
   this.httpClient.get<any[]>('http://www.effyis-partners.ma/ProjetFacturation/CodeIgniter3/api/unique/EventDescription').subscribe(data=>{
     this.listeventD=data
     this.listeventD.unshift({'EventDescription':'All'})
   })


  }


  //liste des sous-elements de categorie
  get_Categorie(){
   return this.listecategorie

  }

  get_mois(){
    return this.datamois
  }
//liste des sous-elements de Processus
  get_Processus(){
    return this.listprocessus
  }
//liste des sous-elements de Famille

  get_Famille(){
    return this.listefamille
  }
//liste des sous-elements de canal

  getCanal() {
    return this.listecanal
  }
  //liste des sous-elements de acceptance
  getAcceptance(){
    return this.listeAcceptance
  }

  getorigine()
  {
    return this.listOrigine
  }
  getclassfication()
  {
    return this.listclaffisication
  }
 get_services_descrptions(){
     return this.listService
 }
 get_event_description()
  {
    return this.listeventD
  }
}
