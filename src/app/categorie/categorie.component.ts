import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../services/categorie.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  /*en typscript ou anglula si on difini un tableau il nous genere souvent des erreur unidfined
  pour palier a cela on doit dire soit il es undifined ou metre signe de ! dans la variable du tableau voir ci-dessous */
  categories !:Array<any>;
  /*message d'error voir la ligne ci-dessous*/
  messageError!:String;

  constructor(private categorieService:CategorieService) { }

  ngOnInit(){
    this.categorieService.getAllCategories().subscribe({
      next:(data)=>{
        this.categories=data;
      },
      error:(error)=>{
        this.messageError=error;   
      }
    });

  }
  deleteCategorie(categorie:any){
    const index=this.categories.indexOf(categorie);
    this.categories.splice(index,1);
  }
  editCategorie(categorie:any){
    alert("Modification");
  }

}
