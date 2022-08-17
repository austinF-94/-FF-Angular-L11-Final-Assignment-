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

    newProduct: Fish = new Fish();

    constructor(private service: FishStoreService, private actRoute: ActivatedRoute, private router: Router) { }
  
    ngOnInit(): void {
        const routeId = this.actRoute.snapshot.paramMap.get("id") ?? "";
        this.id = parseInt(routeId);
        this.service.getProductById(this.id).subscribe(foundContact => {
            this.newProduct = foundContact;
        });
    }
  
    onSubmit(){
      this.service.editContactByID(this.id, this.newProduct).subscribe(edittedContact => {
        console.log(edittedContact);
        this.router.navigateByUrl("/contacts");
      })
    }
}