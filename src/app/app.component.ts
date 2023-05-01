import { Component } from '@angular/core';
import { Theme, MenuOptions } from '../lib/interfaces/menu-models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(
    private router: Router
  ) {
  }

}
