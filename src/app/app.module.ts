import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { ProductComponent } from "./product/product.component";
import { CategoryComponent } from "./category/category.component";
import { ProductFilterPipe } from "./product/product-filter.pipe";
import { ProductAddForms1Component } from "./product/product-add-forms1/product-add-forms1.component";
import { ProductAddForms2Component } from './product/product-add-forms2/product-add-forms2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductComponent,
    CategoryComponent,
    ProductFilterPipe,
    ProductAddForms1Component,
    ProductAddForms2Component
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
