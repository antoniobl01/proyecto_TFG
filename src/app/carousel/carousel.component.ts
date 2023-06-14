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
    '../../assets/img/carousel/blog_img.jpg',
    '../../assets/img/carousel/mapa_img.jpg',
  ]

  sections : Carousel[] = [
    {
      img : this.images[0],
      title : "Feed",
      description : "Recicla tu dispositivo"
    },
    {
      img : this.images[1],
      title : "Blog",
      description : "Aprende cómo reciclar la tecnología"
    },
    {
      img : this.images[2],
      title : "Mapa",
      description : "Consulta los dispositivos de tu zona"
    },
  ];
}
