import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from "./app-routing.module";

import { ProductService } from "./product/product.service";
import { ProductListComponent } from "./product/product-list.component";
import { ProductDetailComponent } from "./product/product-detail.component";

@NgModule({
  imports: [BrowserModule, HttpModule, AppRoutingModule, FormsModule],
  declarations: [AppComponent, ProductListComponent, ProductDetailComponent],
  bootstrap: [AppComponent],
  providers: [ProductService]
})
export class AppModule { }
