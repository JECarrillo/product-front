import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
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
    this.myAppUrl = environment.endpoint
    this.myApiurl = 'products'
  }

  getListProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.myAppUrl + this.myApiurl);


  }


}


