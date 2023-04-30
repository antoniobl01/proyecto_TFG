import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxMatMenuService } from '../../../lib/public-api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private menuService: NgxMatMenuService,
    private router: Router
  ) {
    this.menuService.changeMenu(false);
   }

  ngOnInit() {
  }

  login() {
    this.router.navigate(['home']);
    
  }

}
