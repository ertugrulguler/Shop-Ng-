import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
