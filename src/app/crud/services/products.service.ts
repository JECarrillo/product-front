import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../../interfaces/products';
import { Observable } from 'rxjs/internal/Observable';
import { Category } from 'src/interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private myApiurl: string;
  private myAppUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint
    this.myApiurl = 'products'
  }

  getListProducts() {
    return this.http.get(this.myAppUrl + this.myApiurl);

  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiurl}/${id}`);
  }

  saveProduct(product: Product): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiurl}`, product);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.myAppUrl}${this.myApiurl}/${id}`);
  }

  updateProduct(id: number, product: Product): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiurl}/${id}`, product)
  }

  getListCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.myAppUrl}categories`)
  }
}
