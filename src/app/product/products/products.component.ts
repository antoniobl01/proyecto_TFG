import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interface/interfaces';
import { ProductService } from '../product.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [
    trigger('bodyExpansion', [
      state('collapsed, void', style({ height: '0px', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed, void => collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})
export class ProductsComponent implements OnInit {

  private ProductsUrl: string;
  products: Product[] = [];
  panelOpenState = false;
  
  constructor(private http: HttpClient,
    private productService : ProductService) {
    this.ProductsUrl = 'http://localhost:8080/products';
  }

  ngOnInit(): void {
    this.productService.findAll().subscribe(data => {
      this.products = data;
      console.log(this.products)
    });
  }

}
