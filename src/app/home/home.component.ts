import { Component, Input, OnInit } from '@angular/core';
import { Fish } from '../models/fish'; 
import { ActivatedRoute } from '@angular/router';
import { FishStoreService } from '../fish-store.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   imageURL1: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL5ieoT4vHvq-E79fYJFyEzWbu9D07eXcaWg&usqp=CAU"

   products: Fish[] = [];

   constructor(private service: FishStoreService) { }

  ngOnInit(): void {
    this.service.getProductList().subscribe(result => 
      {
        this.products = result;

        console.log(result);
      });
  }

}