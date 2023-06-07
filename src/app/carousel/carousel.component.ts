import { Component } from '@angular/core';
import { Carousel } from '../interface/interfaces';

@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
	// images : string = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  images = [
    '../../assets/img/login_img.jpg',
    '../../assets/img/login_img.jpg',
    '../../assets/img/login_img.jpg'
  ]

  sections : Carousel[] = [
    {
      img : this.images[0],
      title : "Prueba 1",
      description : "Lorem ipsum 1"
    },
    {
      img : this.images[1],
      title : "Prueba 2",
      description : "Lorem ipsum 1"
    },
    {
      img : this.images[2],
      title : "Prueba 3",
      description : "Lorem ipsum 3"
    },
  ];
}
