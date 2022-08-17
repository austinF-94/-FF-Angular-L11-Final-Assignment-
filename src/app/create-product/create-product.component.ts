import { Component, OnInit } from '@angular/core';
import { FishStoreService } from '../fish-store.service';
import { Fish } from '../models/fish';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  newProduct: Fish = new Fish();

  constructor(private Service: FishStoreService, private router: Router) { }
  ngOnInit(): void {
  }
  onSubmit() {
    this.Service.createProduct(this.newProduct).subscribe(response => {
      this.router.navigateByUrl("/products")
    });
}
}
