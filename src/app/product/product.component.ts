import { Component, Input } from '@angular/core';
import { ProductService } from '../core/services/product.service';
import { Product } from '../core/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() public product!: Product;
  public descriptionColor = '';

  constructor(private readonly productService: ProductService) {
  }

  public removeProduct(): void {
    this.productService.removeProduct(this.product.id);
  }
}
