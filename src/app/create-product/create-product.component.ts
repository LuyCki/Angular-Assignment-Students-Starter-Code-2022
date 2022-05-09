import { Component } from '@angular/core';
import { Product } from '../core/models/product';
import { ProductService } from '../core/services/product.service';

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

  constructor(private readonly productService: ProductService) { }

  public addProduct(): void {
    this.productService.addProduct({ ...this.product, created: new Date });
  }
}
