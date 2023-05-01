import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-user-info',
  template: `
    <ul *ngIf="auth.user$ | async as user">
      <li>{{ user.name }}</li>
      <li>{{ user.email }}</li>
    </ul>`
})
export class UserInfoComponent {
  constructor(public auth: AuthService) {}
}
