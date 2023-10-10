import { NgModule } from "@angular/core";
import { AddEditProductsComponent } from "./add-edit-products/add-edit-products.component";
import { ListProductsComponent } from "./list-products/list-products.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    AddEditProductsComponent,
    ListProductsComponent,
    NavbarComponent,
  ],
  imports: [
   FormsModule,
   ReactiveFormsModule,
   CommonModule,
   RouterModule

  ],
  exports:[
    AddEditProductsComponent,
    ListProductsComponent,
    NavbarComponent
  ],
  providers: [],

})

export class CrudModule { }
