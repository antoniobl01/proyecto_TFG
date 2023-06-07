import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgxMatMenuService } from '../../../lib/public-api';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../product.service';
import { Product } from 'src/app/interface/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit, OnChanges{

  newProduct : Product;

  constructor(
    private menuService: NgxMatMenuService,
    private router: Router, 
    private http: HttpClient,
    private productService : ProductService
    ) {
      menuService.changeMenu(true);
      menuService.selectMenu(2);
      this.newProduct = {
        title : 'dddd',
        description : 'ffff',
        location : 'Calee',
        user : 'PEPE',
        date : '2023-05-02 08:00:00'
      };
  }

  async ngOnInit() {
    this.productService.saveProduct(this.newProduct).subscribe(result => 
      console.log(result)
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.newProduct)
  }

  onSubmit() {
    this.productService.saveProduct(this.newProduct).subscribe(result => 
      console.log(result)
    );
  }

  gotoUserList() {
    this.router.navigate(['/products']);
  }


}
