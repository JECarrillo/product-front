import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/interfaces/products';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  listProducts :Product[] = [
    {id:1, name:'Coca cola', description:'Refrescante soda sabor cola', price:20},
    {id:2, name:'Corona', description:'Cerveza clara nacional', price:35}


  ]
  constructor(private _productService : ProductsService) { }

    ngOnInit(): void{
      this.getListProducts();
     }

     getListProducts(){
      this._productService.getListProducts().subscribe((data) => {
        console.log(data)
      }
     )}
}
