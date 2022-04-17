import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../product/product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
  public product: Product = {
    title: '',
    description: '',
    price: 0,
    imageLink: '',
    isPremium: false,
    isAvailable: false,
    created: new Date
  };

  @Output() public addProductEvent = new EventEmitter<Product>();

  constructor() { }

  public addProduct(): void {
    this.addProductEvent.emit(this.product);
  }
}
