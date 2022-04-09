import { Component, OnInit } from '@angular/core';
import { Product } from './product/product';
import { products } from './product-list';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public products: Product[] = [];

  public ngOnInit(): void {
    this.products = products;
  }
}
