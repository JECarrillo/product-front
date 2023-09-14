import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/interfaces/products';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  listProducts :Product[] = []
  constructor(private _productService : ProductsService) { }

    ngOnInit(): void{
      this.getListProducts();
     }

     getListProducts(){
      this._productService.getListProducts().subscribe((data) => {
        this.listProducts = data;
      }
     )}

      deleteProduct(id: number){
        this._productService.deleteProduct(id).subscribe( ()=> {
         this.getListProducts();
        })
      }







}
