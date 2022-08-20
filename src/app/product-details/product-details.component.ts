import { Component, OnInit } from '@angular/core';
import { Fish } from '../models/fish'; 
import { ActivatedRoute } from '@angular/router';
import { FishStoreService } from '../fish-store.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  imageURL1: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL5ieoT4vHvq-E79fYJFyEzWbu9D07eXcaWg&usqp=CAU"

  id: number = 0;

  products: Fish = new Fish()



  constructor(private service: FishStoreService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
 

  const routeId = this.activatedRoute.snapshot.paramMap.get("id") ?? "";
  this.id = parseInt(routeId);
  this.service.getProductById(this.id).subscribe(foundContact => {
      this.products = foundContact;
  });

}

}
