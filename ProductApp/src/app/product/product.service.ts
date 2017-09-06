﻿import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Product } from "./product";

@Injectable()
export class ProductService {
  private url = "/api/product";

  constructor(private http: Http) {
  }

  getProducts(): Observable<Product[]> {
    return this.http.get(this.url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  addProduct(product: Product): Observable<Product> {
    let headers = new Headers({
      'Content-Type':
      'application/json'
    });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.url, product, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getProduct(id: number): Observable<Product> {
    let url = this.url + "/" + id;
    return this.http.get(url)
      .map(response => response.json() as Product)
      .catch(this.handleError);
  }

  updateProduct(product: Product): Observable<Product> {
    let headers = new Headers({
      'Content-Type':
      'application/json'
    });
    let options = new RequestOptions({ headers: headers });

    return this.http.put(this.url + "/" + product.productId,
      product, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete(this.url + "/" + id)
      .map(() => null)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: any): Observable<any> {
    let errors: string[] = [];

    switch (error.status) {
      case 400:  // Model State Error
        let valErrors = error.json().modelState;
        for (var key in valErrors) {
          for (var i = 0; i < valErrors[key].length; i++) {
            errors.push(valErrors[key][i]);
          }
        }
        break;

      case 404: // Not Found
        errors.push("No Product Data Is Available.");
        break;

      case 500: // Internal Error
        errors.push(error.json().exceptionMessage);
        break;

      default:
        errors.push("Status: " + error.status + " - Error Message: " + error.statusText);
        break;
    };

    console.error('An error occurred', errors);

    return Observable.throw(errors);
  }
}
