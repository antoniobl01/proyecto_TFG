import { Component, Inject, OnInit } from '@angular/core';
import { Theme, MenuOptions } from '../../../lib/interfaces/menu-models';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

import { NgxMatMenuService } from '../../../lib/public-api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  
  
  themeSidebar: Theme;
  themeHeader: Theme;
  arrMenuOptions: MenuOptions[];
  badgeColor: any;
  loginRoute: string = "";
  logoutIcon: any;
  srcLogo: string;
  heightLogo: string = "";
  widthLogo: string = "";
  lang: string;
  visibleNotif: boolean;
  badge: number = 1;

  profileJson: string = null;

  constructor(
    private router: Router,
    public auth: AuthService,
    private menuService: NgxMatMenuService,
    @Inject(DOCUMENT) public document: Document, 
  ) {
    this.menuService.changeMenu(true);

    this.themeSidebar = {background: 'green', color: 'white'};
    this.themeHeader = {background: 'white', color: 'gray'};
    this.arrMenuOptions = [
      {id: 0, title: 'Home', icon: 'home', route: 'home'},
      // {divider: true},
      {id: 1, title: 'Feed', icon: 'products', route: 'products', children: [
        {id: 2, title: 'New Product', icon: 'add', route: 'add'},
      ]},
      {id: 3, title: 'Settings', icon: 'settings', route: 'settings', children: [
        {id: 4, title: 'Add', icon: 'add', route: 'add'},
        {id: 5, title: 'Edit', icon: 'edit', route: 'edit'},
        {id: 6, title: 'Delete', icon: 'delete', route: 'delete'},
      ]}
    ];
    this.badgeColor = '#9ee6b1';
    this.logoutIcon = undefined;
    this.srcLogo = 'assets/img/logo copy.svg';
    this.lang = 'en';
    this.visibleNotif = true;
  }

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => (this.profileJson = JSON.stringify(profile, null, 2)),
    );
    this.router.navigate(['home']);
  }

  openNotif(event: any) {
    console.log(event);
    this.badge = 0;
  }

  profileClick(event: any) {
    console.log(event);
  }


  logout() {
    console.log("logout")
    this.router.navigate(['']);
  }
}