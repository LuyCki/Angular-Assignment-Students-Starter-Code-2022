import { Component, Input } from '@angular/core';
import { ProductService } from '../core/services/product.service';
import { Product } from '../core/models/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {
  public isEdit = false;
  private _product!: Product;

  @Input() public set product(product: Product) {
    this._product = { ...product };
  }

  public get product(): Product {
    return this._product;
  }

  constructor(private readonly productService: ProductService) {}

  public editProduct(): void {
    this.productService.editProduct(this.product);
  }
}
