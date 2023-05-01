import { Component, Inject, OnInit } from '@angular/core';
import { Theme, MenuOptions } from '../../../lib/interfaces/menu-models';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

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
    @Inject(DOCUMENT) public document: Document, 
  ) {

    this.themeSidebar = {background: '#e53935', color: 'white'};
    this.themeHeader = {background: 'white', color: 'gray'};
    this.arrMenuOptions = [
      {id: 0, title: 'Home', icon: 'home', route: 'home'},
      // {divider: true},
      {id: 1, title: 'Settings', icon: 'settings', route: 'settings', children: [
        {id: 2, title: 'Add', icon: 'add', route: 'add'},
        {id: 3, title: 'Edit', icon: 'edit', route: 'edit'},
        {id: 4, title: 'Delete', icon: 'delete', route: 'delete'},
      ]}
    ];
    this.badgeColor = '#9ee6b1';
    this.logoutIcon = undefined;
    this.srcLogo = 'assets/logo.PNG';
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