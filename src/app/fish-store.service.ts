import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Fish } from './models/fish';

@Injectable({
  providedIn: 'root'
})
export class FishStoreService {

  baseUrl: string = 'http://localhost:3000/home';


  constructor(private http: HttpClient) { }
}
