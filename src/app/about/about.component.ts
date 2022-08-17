import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  imageURL1: string = "https://www.liveaquaria.com/images/articles/141-water-motion-reef-aquariums.jpg"
  imageURL2: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL5ieoT4vHvq-E79fYJFyEzWbu9D07eXcaWg&usqp=CAU"


  constructor() { }

  ngOnInit(): void {
  }

}