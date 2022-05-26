import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  /*en typscript ou anglula si on difini un tableau il nous genere souvent des erreur unidfined
  pour palier a cela on doit dire soit il es undifined ou metre signe de ! dans la variable du tableau voir ci-dessous */
  categories !:Array<any>;
  Categories =[
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
                  
                },{
                  "id":4,
                  "libelle":"Longue description d'un produit",
                  "description":"en typscript ou anglula si on difini un tableau"
                  
                }
              ]

  constructor() { }

  ngOnInit(){
    this.categories=this.Categories;

  }
  deleteCategorie(g:any){
    const index=this.Categories.indexOf(g);
    this.Categories.splice(index,1);
  }

}
