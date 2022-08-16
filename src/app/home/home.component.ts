import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   imageURL: string = "https://www.liveaquaria.com/images/categories/product/lg_66284_Flame_Angelfish.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
