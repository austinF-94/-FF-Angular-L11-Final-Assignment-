import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Fish } from './models/fish';

@Injectable({
  providedIn: 'root'
})
export class FishStoreService {

  baseUrl: string = 'http://localhost:3000/Fish';


  constructor(private http: HttpClient) { }
  getProductList(): Observable<Fish[]> 
  {
    return this.http.get<Fish[]>(this.baseUrl);
  }

  getProductById(id: number): Observable<Fish> {
    return this.http.get<Fish>(this.baseUrl + "/" + id);
}

  createProduct(products: Fish): Observable<Fish>
  {
    return this.http.post<Fish>(this.baseUrl, products);
  }
  editContactByID(id: number, edittedContact: Fish): Observable<Fish> {
    return this.http.put<Fish>(this.baseUrl + "/" + id, edittedContact);
}
  deleteContactByID(id: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl + "/" + id)
}
}
