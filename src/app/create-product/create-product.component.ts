import { Component, EventEmitter, Output } from '@angular/core';
import { ProductService } from '../core/product.service';
import { Product } from '../product/product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
  public product: Product = {
    id: 0,
    title: '',
    description: '',
    price: 0,
    imageLink: '',
    isPremium: false,
    isAvailable: false,
    created: new Date
  };

  public products: any;

  constructor(private readonly productService: ProductService) {
    this.productService.products$.subscribe((products: Product[]) => this.products = products);
   }

  public addProduct(): void {
    this.productService.addProduct({ ...this.product, created: new Date, id: Date.now() + Math.random() });
  }
}
