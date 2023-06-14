import { Component, OnInit } from '@angular/core';
import { Article } from '../interface/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  articles: Article[] = [
    {
      id: 1,
      title: "La importancia de la tecnología en la protección del medio ambiente",
      description: "Explora cómo la tecnología está desempeñando un papel crucial en la protección del medio ambiente y la lucha contra el cambio climático.",
      user: "Laura García",
      img: "https://www.thecircularlab.com/web/app/uploads/2022/04/MicrosoftTeams-image-43.jpg",
      date: "2023-06-01"
    },
    {
      id: 2,
      title: "Cómo la inteligencia artificial está impulsando la sostenibilidad",
      description: "Descubre cómo la inteligencia artificial se está utilizando para abordar los desafíos medioambientales y promover la sostenibilidad en diferentes sectores.",
      user: "Carlos Martínez",
      img: "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/03/07/16466580453583.jpg",
      date: "2023-06-05"
    },
    {
      id: 3,
      title: "Nuevas tecnologías verdes: energía renovable y almacenamiento",
      description: "Conoce las últimas innovaciones en tecnologías verdes, incluyendo energías renovables y soluciones de almacenamiento de energía para un futuro más sostenible.",
      user: "María Fernández",
      img: "https://media.licdn.com/dms/image/C4E12AQE-oJSzwzLsUw/article-cover_image-shrink_600_2000/0/1598451579070?e=2147483647&v=beta&t=GLr6hQFl4SIHWTQXhVaJbOBuV8FgPOjmMeNWj2bxe60",
      date: "2023-06-10"
    },
    {
      id: 4,
      title: "La economía circular y la tecnología: hacia un futuro sostenible",
      description: "Descubre cómo la economía circular y la tecnología pueden trabajar juntas para impulsar la sostenibilidad y reducir el desperdicio de recursos.",
      user: "Ana Rodríguez",
      img: "https://www.prensalibre.com/wp-content/uploads/2022/05/BV-17052022-TECNO-Y-RECICLAJE-07_67685399.jpg?quality=52&w=760&h=430&crop=1",
      date: "2023-06-15"
    },
    {
      id: 5,
      title: "Tecnología verde en la industria automotriz: hacia la movilidad sostenible",
      description: "Explora las innovaciones tecnológicas en la industria automotriz que están impulsando la movilidad sostenible y reduciendo las emisiones de carbono.",
      user: "Pedro Gómez",
      img: "https://us.123rf.com/450wm/wabeno/wabeno1308/wabeno130800128/21289587-recicle-el-clave.jpg?ver=6",
      date: "2023-06-20"
    },
    {
      id: 6,
      title: "La tecnología blockchain y su potencial para la gestión medioambiental",
      description: "Aprende cómo la tecnología blockchain puede mejorar la gestión medioambiental al proporcionar transparencia, trazabilidad y eficiencia en diversas áreas.",
      user: "Sofía López",
      img: "https://guinea.pe/blog/wp-content/uploads/2021/12/aplicaciones-iot-agricultura-guinea-mobile-soluciones.jpg",
      date: "2023-06-25"
    },
    {
      id: 7,
      title: "Inteligencia artificial para la conservación de la biodiversidad",
      description: "Descubre cómo la inteligencia artificial se utiliza para proteger y conservar la biodiversidad en ecosistemas frágiles y en peligro.",
      user: "Javier Torres",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDv2o5zy8ytcRr3naFLrJi_VZ0sSTRKvinukDsNlYhH09dslXQF_BJ2fjDFlTr9K0E8Wg&usqp=CAU",
      date: "2023-06-30"
    },
    {
      id: 8,
      title: "Tecnologías emergentes y su impacto en la mitigación del cambio climático",
      description: "Explora las tecnologías emergentes, como la captura de carbono y la energía geotérmica, y cómo están ayudando a mitigar el cambio climático.",
      user: "Luisa Ramírez",
      img: "https://www.latercera.com/resizer/GuDaoripHFytwasEd5c8beoCby0=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/XKLEXD5IV5CHPJAXDV72VX3T3U.jpg",
      date: "2023-07-05"
    },
    {
      id: 9,
      title: "Impresión 3D y su potencial para una fabricación más sostenible",
      description: "Conoce cómo la impresión 3D está revolucionando la fabricación al reducir residuos, utilizar menos recursos y promover la producción local.",
      user: "Andrés Morales",
      img: "https://www.retema.es/sites/default/files/2023-02/ia.jpg",
      date: "2023-07-10"
    }
  ];

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit(): void {

  }

  addarticle(): void {

  }

  navigateArticle(): void {
    this.router.navigate(['/blog-article']);
  }

}
