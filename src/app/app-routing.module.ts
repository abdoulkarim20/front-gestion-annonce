import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CategorieComponent } from './categorie/categorie.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ProduitComponent } from './produit/produit.component';

const routes: Routes = [
  {path:"",component:AccueilComponent},
  {path:"categories",component:CategorieComponent},
  {path:"produits",component:ProduitComponent},
  {path:"formulaire",component:FormulaireComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
