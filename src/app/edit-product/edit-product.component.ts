import { Component, OnInit } from '@angular/core';
import { Fish } from '../models/fish'; 
import { FishStoreService } from '../fish-store.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
    id: number = 0;

    currentProduct: Fish = new Fish()

    constructor(private service: FishStoreService, private actRoute: ActivatedRoute, private router: Router) { }
  
    ngOnInit(): void {
        const routeId = this.actRoute.snapshot.paramMap.get("id") ?? "";
        this.id = parseInt(routeId);
        this.service.getProductById(this.id).subscribe(foundProduct => {
            this.currentProduct = foundProduct;
        });
    }
  
    onSubmit(){
      this.service.editProductByID(this.id, this.currentProduct).subscribe(edittedProduct => {
        console.log(edittedProduct);
        this.router.navigateByUrl("/products");
      })
    }
}