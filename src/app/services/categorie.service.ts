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
                      "description":"en typscript ou anglula si on difini un tableau" 
                    },
                    {
                      "id":2,
                      "libelle":"Longue description d'un produit",
                      "description":"en typscript ou anglula si on difini un tableau"               
                    },
                    {
                      "id":3,
                      "libelle":"Longue description d'un produit",
                      "description":"en typscript ou anglula si on difini un tableau" 
                    },
                    {
                      "id":4,
                      "libelle":"Longue description d'un produit",
                      "description":"en typscript ou anglula si on difini un tableau"               
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
}
