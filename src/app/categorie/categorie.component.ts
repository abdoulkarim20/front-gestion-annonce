import { Component, OnInit } from '@angular/core';
import { Categorie } from '../models/categorie.model';
import { CategorieService } from '../services/categorie.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  /*en typscript ou anglula si on difini un tableau il nous genere souvent des erreur unidfined
  pour palier a cela on doit dire soit il es undifined ou metre signe de ! dans la variable du tableau voir ci-dessous */
  categories !:Categorie[];
  /*message d'error voir la ligne ci-dessous*/
  messageError!:String;

  constructor(private categorieService:CategorieService) { }

  ngOnInit(){
    this.getAllCategories();
  }

  getAllCategories(){
    this.categorieService.getAllCategories().subscribe({
      next:(data)=>{
        this.categories=data;
      },
      error:(error)=>{
        this.messageError=error;   
      }
    });
  }
  deleteCategorie(categorie:Categorie){
    let confirmation=confirm("vous etes sur de supprimer");
    if(confirmation==false) return;
    // const index=this.categories.indexOf(categorie);
    // this.categories.splice(index,1);
    this.categorieService.deleteCategorie(categorie.id).subscribe({
      next:(data)=>{
        // this.getAllCategories(); avec cette ligne on va faire un va et viens entre la base de donnees d'ou on supprime dans la front puis la methode deleteCategorie supprim deja dans la base de donnees
        let index=this.categories.indexOf(categorie);
        this.categories.splice(index,1); 
      }
    });
  }
  editCategorie(categorie:Categorie){
    alert("Modification");
  }

  setPromotion(categorie:Categorie){
    let promotion=categorie.promotion;
    this.categorieService.setPromotion(categorie.id).subscribe({
      next:(data)=>{
        categorie.promotion=!promotion;
      },
      error:err=>{
        this.messageError;
      }
    })

    // this.categorieService.setPromotion(categorie.id);
  }

}
