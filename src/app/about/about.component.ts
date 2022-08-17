import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  imageURL: string = "https://www.liveaquaria.com/images/articles/141-water-motion-reef-aquariums.jpg"


  constructor() { }

  ngOnInit(): void {
  }

}
