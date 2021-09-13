import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { CreateproductComponent } from "./createproduct/createproduct.component";

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'createproduct', component: CreateproductComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
