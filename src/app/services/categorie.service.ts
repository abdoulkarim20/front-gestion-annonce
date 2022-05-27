import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Categorie } from '../models/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private categoris !:Categorie[];
  constructor() { 
    this.categoris=[
                    {
                      "id":1,
                      "libelle":"Longue description d'un produit",
                      "description":"en typscript ou anglula si on difini un tableau",
                      "promotion":true
                    },
                    {
                      "id":2,
                      "libelle":"Longue description d'un produit",
                      "description":"en typscript ou anglula si on difini un tableau",
                      "promotion":false              
                    },
                    {
                      "id":3,
                      "libelle":"Longue description d'un produit",
                      "description":"en typscript ou anglula si on difini un tableau",
                      "promotion":true
                    },
                    {
                      "id":4,
                      "libelle":"Longue description d'un produit",
                      "description":"en typscript ou anglula si on difini un tableau",
                      "promotion":true             
                    }
                  ];
  }
  public getAllCategories():Observable<Categorie[]>{
    let rdom=Math.random();
    if(rdom<0.05) return throwError(()=>new Error("On a puis acceder a la base de donnees"));
    else return of(this.categoris);
  }

  //la methode pour supprimer une categorie
  public deleteCategorie(id:number):Observable<boolean>{
    this.categoris=this.categoris.filter(c=>c.id!=id);
    return of(true);
  }

  public setPromotion(id:number):Observable<boolean>{
    //je cherche d'abbord le produit a modifier
    // alert("je suis la pour changer la pormotion");
    let categorie=this.categoris.find(categorie=>categorie.id==id)
    if(categorie !=undefined){
      categorie.promotion=!categorie.promotion;
      return of(true)
    }else{
      return throwError(()=>new Error("Produit n'existe pas"));
    }
  }
}
