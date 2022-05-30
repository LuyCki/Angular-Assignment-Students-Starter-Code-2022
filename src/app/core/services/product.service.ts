import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpService } from '../api/http.service';
import { Product } from '../models/product';

@Injectable({ providedIn: 'root' })
export class ProductService {

  public products$ = new Subject<Product[]>();

  products: Product[] = [];

  constructor(private readonly httpService: HttpService) { }

  public addProduct(product: Product): void {
    this.httpService.post('/products', product).subscribe(
      {
        next: () => this.getProducts(),
        error: (error) => console.error(error),
        complete: () => console.log('Its complete')
      }
    )
  }

  public editProduct(editedProduct: Product): void {
    this.httpService.put(`/products/${editedProduct.id}`, editedProduct).subscribe(
      {
        next: () => this.getProducts(),
        error: (error) => console.error(error),
        complete: () => console.log('Its complete')
      }
    )
  }

  public getProduct(id: number): Observable<Product> {
    return this.httpService.get(`/products/${id}`);
  }

  public getProducts(): void {
    this.httpService.get('/products').subscribe(
      {
        next: (products) => this.products$.next(products),
        error: (error) => console.error(error),
        complete: () => console.log('Its complete')
      }
    );
  }

  public removeProduct(id: number): void {
    this.httpService.delete(`/products/${id}`).subscribe(
      {
        next: () => this.getProducts(),
        error: (error) => console.error(error),
        complete: () => console.log('Its complete')
      }
    )

    this.products$.subscribe((products: Product[]) => this.products = products);

    const products: Product[] = [];

    this.products$.next(products);

  }
}
