import { Component, OnInit } from '@angular/core';
import { ProductService } from './core/product.service';
import { Product } from './product/product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public products: Product[] = [];
  public title = '';

  constructor(private readonly productService: ProductService) {}

  public ngOnInit(): void {
    this.productService.products$.subscribe((products: Product[]) => this.products = products);
  }

  public removeAllProducts(): void {
    this.productService.removeAllProducts();
  }

  public onSearchByTitle(title: string): void{
    this.productService.searchByTitle(title);
  }
}
