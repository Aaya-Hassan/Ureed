import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductReadComponent } from './product-read/product-read.component';

const routes: Routes = [
    {
        path: 'product/create',
        component: ProductCreateComponent
      },
      {
        path: 'edit/:id',
        component: ProductUpdateComponent
      },
      {
        path: 'products',
        component: ProductReadComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
