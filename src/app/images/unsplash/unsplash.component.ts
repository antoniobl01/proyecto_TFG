import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-unsplash',
  templateUrl: './unsplash.component.html',
  styleUrls: ['./unsplash.component.scss']
})
export class UnsplashComponent {

  images: any;
  links : String[] = [];

  constructor(private http: HttpClient) { }

  async ngOnInit() {


    this.http.get('https://api.unsplash.com/search/photos', {
      headers: {
        'Authorization': 'Client-ID Qc0OTigNve1FqbobYPWJ5_esssYtgZNIMpE8Wb-Z9D0',

      },
      params: {
        'query': 'recycled devices',
        'per_page': '10',
      }
    }).subscribe((data) => {
      this.images = data;
      this.images = this.images.results;
      //console.log(this.images)
      this.images.forEach((data, index) => {
        this.links[index] = data.links.self;
      })
      //console.log(this.links);
    });


  }
}
