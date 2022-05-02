import { Injectable } from '@angular/core';
import { Product } from '../product/product';
import { Subject } from './subject';

@Injectable({providedIn: 'root'})
export class ProductService {
  public products$ = new Subject<Product[]>();
  private products: Product[] = [];

  public getProducts(): Product[] {
    return this.products;
  }

  public addProduct(product: Product): void {
    this.products.push(product);

    this.products$.next(this.products);
  }

  public removeAllProducts(): void {
    this.products.splice(0, this.products.length);

    this.products$.next(this.products);
  }

  public removeProduct(id: number): void {
    const index = this.products.findIndex((product: Product) => product.id === id);
    this.products.splice(index, 1);

    this.products$.next(this.products);
  }

  public editProduct(editedProduct: Product): void {
    const index = this.products.findIndex((product: Product) => product.id === editedProduct.id);
    this.products[index] = editedProduct;

    this.products$.next(this.products);
  }

  public searchByTitle(title: string): void {
    if (title) {
      const filtedList = this.products.filter((product: Product) =>
        product.title.toLowerCase().includes(title.toLowerCase())
      );

      this.products$.next(filtedList);
    } else {
      this.products$.next(this.products);
    }
  }
}
