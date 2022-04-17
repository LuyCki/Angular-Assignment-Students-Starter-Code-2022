import { Component, OnInit } from '@angular/core';
import { products } from './product-list';
import { Product } from './product/product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public products: Product[] = [];

  constructor() {}

  public ngOnInit(): void {
    this.products = products;
  }

  public addProduct(product: Product): void {
    this.products.push(product);
  }
}
