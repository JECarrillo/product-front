import { Component, NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
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
    //loadComponent:()=> import('./pages/login/login.component').then((mod) =>mod.LoginComponent)
  },
  // {path: '**', redirectTo:'',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
