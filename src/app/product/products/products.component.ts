import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
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
    private productService: ProductService) {
    this.ProductsUrl = 'http://localhost:8080/products';
  }

  ngOnInit(): void {
    // this.productService.findAll().subscribe(data => {
    //   this.products = data;
    //   console.log(this.products)
    // });

    this.products = [
      {
        id: 1,
        title: "Producto 1",
        description: "Descripción del Producto 1",
        location: "Ubicación 1",
        user: "Usuario 1",
        date: "2023-06-13"
      },
      {
        id: 2,
        title: "Producto 2",
        description: "Descripción del Producto 2",
        location: "Ubicación 2",
        user: "Usuario 2",
        date: "2023-06-14"
      },
      {
        id: 3,
        title: "Producto 3",
        description: "Descripción del Producto 3",
        location: "Ubicación 3",
        user: "Usuario 3",
        date: "2023-06-15"
      },
      {
        id: 4,
        title: "Producto 4",
        description: "Descripción del Producto 4",
        location: "Ubicación 4",
        user: "Usuario 4",
        date: "2023-06-16"
      },
      {
        id: 5,
        title: "Producto 5",
        description: "Descripción del Producto 5",
        location: "Ubicación 5",
        user: "Usuario 5",
        date: "2023-06-17"
      }
    ];

  }

  buy(arr, v) {
    this.productService.removeItem(arr, v);
    this.productService.buyedProducts.push(v);
    console.log(this.productService.buyedProducts);
  }

}

