import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductModule } from './create-product/create-product.module';
import { ProductsModule } from './products/products.module';

const routes: Routes = [
  {
    path: 'create-product',
    loadChildren: async(): Promise<CreateProductModule> =>
      import('./create-product/create-product.module').then((module) => module.CreateProductModule)
  },
  {
    path: 'products',
    loadChildren: async(): Promise<ProductsModule> =>
      import('./products/products.module').then((module) => module.ProductsModule)
  },
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/products',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
