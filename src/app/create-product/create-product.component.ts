import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../core/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  public productForm!: FormGroup;

  constructor(private readonly productService: ProductService, private readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group(
      {
        title: ['', Validators.required],
        description: ['', Validators.required],
        price: [0, [Validators.required, Validators.min(1)]],
        imageLink: ['', Validators.required],
        isPremium: [false, Validators.requiredTrue],
        isAvailable: [false, Validators.requiredTrue]
      }
    )
  }

  public addProduct(): void {
    this.productService.addProduct({ ...this.productForm.value, created: new Date });
  }
}
