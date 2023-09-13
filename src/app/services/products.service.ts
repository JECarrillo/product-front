import { Injectable } from '@angular/core';
import { enviroment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../interfaces/products';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  //private myAppUrl: string;
  private myApiurl: string;
  private myAppUrl: string;


  constructor(private http :HttpClient) {
    this.myAppUrl = enviroment.endpoint
    this.myApiurl = 'product'
  }

  getListProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.myAppUrl + this.myApiurl);


  }


}


