import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorieComponent } from './categorie/categorie.component';
import { ProduitComponent } from './produit/produit.component';

const routes: Routes = [
  {path:"categories",component:CategorieComponent},
  {path:"produits",component:ProduitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
