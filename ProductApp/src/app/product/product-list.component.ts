import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

import { Product } from "./product";
import { ProductService } from "./product.service";

@Component({
  templateUrl: "./product-list.component.html"
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  // Public properties
  products: Product[] = [];
  messages: string[] = [];

  private getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products,
      errors => this.handleErrors(errors));
  }

  selectProduct(id: number) {
    this.router.navigate(['/productDetail', id]);
  }

  add() {
    this.router.navigate(['/productDetail', -1]);
  }

  deleteProduct(id: number) {
    if (confirm("Delete this product?")) {
      this.productService.deleteProduct(id)
        .subscribe(() => this.getProducts(),
        errors => this.handleErrors(errors));
    }
  }

  private handleErrors(errors: any): void {
    for (let msg of errors) {
      this.messages.push(msg);
    }
  }
}