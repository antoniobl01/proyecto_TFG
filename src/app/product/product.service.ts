import { Injectable } from '@angular/core';
import { Product } from '../interface/interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private ProductsUrl: string;
  private addProductsUrl: string;

  constructor(private http: HttpClient) {
    this.ProductsUrl = 'http://localhost:8080/products';
    this.addProductsUrl = 'http://localhost:8080/addProduct';
  }

  Product() {

  }

  public findAll(): Observable<Product[]> {
    console.log(this.http.get<Product[]>(this.ProductsUrl));
    return this.http.get<Product[]>(this.ProductsUrl);
  }

  public saveProduct(product: Product) {
    return this.http.post<Product>(this.addProductsUrl, product);
  }
}

