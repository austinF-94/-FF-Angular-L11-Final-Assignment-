import { Component, Input, OnInit } from '@angular/core';
import { Fish } from '../models/fish'; 
import { ActivatedRoute } from '@angular/router';
import { FishStoreService } from '../fish-store.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
