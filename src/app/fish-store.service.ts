import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Fish } from './models/fish';

@Injectable({
  providedIn: 'root'
})
export class FishStoreService {

  baseUrl: string = 'http://localhost:3000/Fish';
  sortByPriceLowToHigh: string = 'http://localhost:3000/Fish?_sort=price,views&_order=asc'
  sortByPriceHighToLow: string = 'http://localhost:3000/Fish?_sort=price,views&_order=desc'



  constructor(private http: HttpClient) { }
  getProductList(): Observable<Fish[]> 
  {
    return this.http.get<Fish[]>(this.baseUrl);
  }
  getProductListPriceHighToLow(): Observable<Fish[]> 
  {
    return this.http.get<Fish[]>(this.sortByPriceHighToLow);
  }
  getProductListPriceLowToHigh(): Observable<Fish[]> 
  {
    return this.http.get<Fish[]>(this.sortByPriceLowToHigh);
  }
  getProductById(id: number): Observable<Fish> {
    return this.http.get<Fish>(this.baseUrl + "/" + id);
  }
  createProduct(products: Fish): Observable<Fish>
  {
    return this.http.post<Fish>(this.baseUrl, products);
  }
  editProductByID(id: number, editProduct: Fish): Observable<Fish> {
  return this.http.put<Fish>(this.baseUrl + "/" + id, editProduct);
  }
  deleteContactByID(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + "/" + id)
  }
}

