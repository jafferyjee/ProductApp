"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        this.url = "/api/product";
    }
    ProductService.prototype.getProducts = function () {
        return this.http.get(this.url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProductService.prototype.addProduct = function (product) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.url, product, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProductService.prototype.getProduct = function (id) {
        var url = this.url + "/" + id;
        return this.http.get(url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ProductService.prototype.updateProduct = function (product) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put(this.url + "/" + product.productId, product, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProductService.prototype.deleteProduct = function (id) {
        return this.http.delete(this.url + "/" + id)
            .map(function () { return null; })
            .catch(this.handleError);
    };
    ProductService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ProductService.prototype.handleError = function (error) {
        var errors = [];
        switch (error.status) {
            case 400:
                var valErrors = error.json().modelState;
                for (var key in valErrors) {
                    for (var i = 0; i < valErrors[key].length; i++) {
                        errors.push(valErrors[key][i]);
                    }
                }
                break;
            case 404:
                errors.push("No Product Data Is Available.");
                break;
            case 500:
                errors.push(error.json().exceptionMessage);
                break;
            default:
                errors.push("Status: " + error.status + " - Error Message: " + error.statusText);
                break;
        }
        ;
        console.error('An error occurred', errors);
        return Observable_1.Observable.throw(errors);
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map