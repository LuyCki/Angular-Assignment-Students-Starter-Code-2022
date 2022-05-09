import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpService } from '../api/http.service';
import { Product } from '../models/product';

@Injectable({ providedIn: 'root' })
export class ProductService {
  public products$ = new Subject<Product[]>();

  constructor(private readonly httpService: HttpService) { }

  public getProducts(): void {
    this.httpService.get('/products').subscribe(
      {
        next: (products) => this.products$.next(products),
        error: (error) => console.error(error),
        complete: () => console.log('Its complete')
      }
    );
  }

  public addProduct(product: Product): void {

  }

  public removeProduct(id: number): void {

  }

  public editProduct(editedProduct: Product): void {

  }
}
