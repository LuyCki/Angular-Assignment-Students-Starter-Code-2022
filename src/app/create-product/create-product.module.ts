import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateProductComponent } from './create-product.component';
import { CreateProductRoutingModule } from './create-product-routing.module';

@NgModule({
  declarations: [CreateProductComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CreateProductRoutingModule
  ]
})
export class CreateProductModule { }
