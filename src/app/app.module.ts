import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ProduitComponent } from './produit/produit.component';

@NgModule({
  declarations: [
    AppComponent,
    CategorieComponent,
    ProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
