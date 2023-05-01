import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { NgxMatMenuService } from '../../../lib/public-api';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  constructor(
      @Inject(DOCUMENT) public document: Document, 
      public auth: AuthService,
      private menuService: NgxMatMenuService,
      private router: Router
    ) {
    this.menuService.changeMenu(true);
  }

}