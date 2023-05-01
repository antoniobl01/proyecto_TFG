import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { NgxMatMenuService } from 'ngx-mat-menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../../shared/shared.component.scss']
})
export class HeaderComponent {
  constructor(
    @Inject(DOCUMENT) public document: Document, 
    public auth: AuthService,
  ) {}
}
