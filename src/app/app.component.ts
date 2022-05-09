import { Component, OnInit } from '@angular/core';
import { ProductService } from './core/services/product.service';
import { Product } from './core/models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public products: Product[] = [];

  constructor(public readonly productService: ProductService) {}

  public ngOnInit(): void {
    this.productService.getProducts();
  }
}
