import {  NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './crud/list-products/list-products.component';
import { AddEditProductsComponent } from './crud/add-edit-products/add-edit-products.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: 'crud', component: ListProductsComponent },
  { path: 'add', component: AddEditProductsComponent },
  { path: 'edit/:id', component: AddEditProductsComponent },
  {
    path: '',
    component: LoginComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
