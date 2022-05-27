import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private categoris !:Array<any>;
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
  public getAllCategories():Observable<Array<any>>{
    let rdom=Math.random();
    if(rdom<0.05) return throwError(()=>new Error("On a puis acceder a la base de donnees"));
    else return of(this.categoris);
  }
}
