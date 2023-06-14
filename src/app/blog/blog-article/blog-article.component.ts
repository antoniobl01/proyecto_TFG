import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.scss', './../blog.component.scss']
})
export class BlogArticleComponent {
  constructor(
    private router: Router,
  ) {
  }
}
