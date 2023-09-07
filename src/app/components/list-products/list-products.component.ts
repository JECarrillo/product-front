import { Component, OnInit } from '@angular/core';
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
  constructor() { }

    ngOnInit(): void{

    }

}
