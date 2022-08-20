import { Component, OnInit } from '@angular/core';
import { Fish } from '../models/fish'; 
import { FishStoreService } from '../fish-store.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  imageURL1: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL5ieoT4vHvq-E79fYJFyEzWbu9D07eXcaWg&usqp=CAU"


  products: Fish[] = [];  

  constructor(private service: FishStoreService) { }

  ngOnInit(): void {
    this.service.getProductList
    ().subscribe(result => 
      {
        this.products = result;
      });
  }
  onDelete(id: number)
{
  this.service.deleteContactByID(id).subscribe(response => {
      this.getProducts();
  });
}
getProducts() 
{
  this.service.getProductList().subscribe(foundContact => {
      this.products = foundContact
      this.products

  });
}
sortProductsLowToHigh() 
{
  this.service.getProductListPriceLowToHigh().subscribe(foundContact => {
      this.products = foundContact
      this.products

  });
}
sortProductsHighToLow() 
{
  this.service.getProductListPriceHighToLow().subscribe(foundContact => {
      this.products = foundContact
      this.products

  });
}
}