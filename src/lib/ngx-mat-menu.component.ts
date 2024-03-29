import { Component, OnInit, Input, HostListener, Output, EventEmitter, OnChanges } from '@angular/core';
import { Theme, MenuOptions } from './interfaces/menu-models';
import { Router } from '@angular/router';
import { NgxMatMenuService } from './ngx-mat-menu.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'ngx-mat-menu',
  templateUrl: './ngx-mat-menu.component.html',
  styleUrls: ['./ngx-mat-menu.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('250ms', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('250ms', style({ transform: 'translateX(100%)', opacity: 0 }))
      ])
    ]
    )

  ]
})
export class NgxMatMenuComponent implements OnInit, OnChanges {

  activeMenu: number;
  show: boolean = false;
  showMenu = false;
  widthSidebar = '0px';
  posSidebar = 'relative';
  showHeader = true;
  textLogout: string = "";
  hover: boolean = false;

  @Input() themeSidebar: Theme;
  @Input() themeHeader: Theme;
  @Input() themeSidebarHeader: Theme = {background: 'white', color: ''};

  @Input() arrMenuOptions: Array<MenuOptions>; // required
  @Input() logoutIcon: string; // optional
  @Input() badgeColor: string; // optional, default is black
  @Input() srcLogo: string; // optional
  @Input() heightLogo: string; // optional
  @Input() widthLogo: string; // optional
  @Input() lang: string; // optional default is en (see below in switch)
  @Input() visibleNotif: boolean; // optional, default is false/undefined
  @Input() badge: number; // number of notifications
  @Input() defaultWidth: string; // default width of the menu sidebar
  @Input() borderHeader: string;
  @Input() borderSidebar: string;
  @Input() borderSidebarHeader: string;
  @Input() borderSidebarFooter: string;
  @Input() borderMenuItems: string;
  @Input() headerPicture: string; 
  @Input() headerTitle: string;
  @Input() headerTitleColor: string;
  @Input() headerSubtitle: string;
  @Input() headerSubtitleColor: string;

  @Output() openNotif = new EventEmitter();
  @Output() logoutEvent = new EventEmitter();
  @Output() profileClick = new EventEmitter();
  constructor(
    private menuService: NgxMatMenuService,
    private router: Router
  ) {


    this.activeMenu = this.menuService.getSelectedMenu();
    // Sidebar selection change
    this.menuService.changeMenuSelect.subscribe(data => {
      this.activeMenu = data;
    });

    // Header,sidebar show/hide
    this.menuService.changeShowMenu.subscribe(data => {
      this.show = data;
    });
  }

  ngOnInit() {
    this.checkSidebarPos();
  }

  ngOnChanges() {
    console.log(this.lang);
    switch (this.lang) {
      case 'en':
        this.textLogout = 'Logout';
        break;
      case 'hu':
        this.textLogout = 'Kijelentkezés';
        break;
      default:
        this.textLogout = 'Logout';
        break;
    }
  }

  @HostListener('window:resize', [''])
  onResize(): void {
    this.checkSidebarPos();
  }

  checkSidebarPos() {
    const width = document.getElementById('cont').offsetWidth;
    if (width <= 700) {
      this.posSidebar = 'absolute';
    } else {
      this.posSidebar = 'relative';
    }
  }

  setMenu(event) {
    if (event !== undefined) {
      if (event === true) {

        this.widthSidebar = this.defaultWidth ? this.defaultWidth : '200px';
        this.showMenu = !this.showMenu;
      } else {
        setTimeout(() => {
          this.showMenu = !this.showMenu;
        }, 200);
        this.widthSidebar = '0px';
      }
    } else {
      if (this.showMenu) {
        this.widthSidebar = '0px';
        setTimeout(() => {
          this.showMenu = !this.showMenu;
        }, 200);
      } else {
        this.widthSidebar = this.defaultWidth ? this.defaultWidth : '200px';
        setTimeout(() => {
          this.showMenu = !this.showMenu;
        }, 200);
      }
    }

  }

  /**
   * Expandable menu item height change
   * @param id Id of item and expandable element
   */
  expandMenu(id: number) {
    console.log(document.getElementById(id.toString()).offsetHeight);
    if (document.getElementById(id.toString()).offsetHeight === 0) {
      document.getElementById(id.toString()).style.height = 'auto';
      document.getElementById(id.toString()).style.display = 'block';

    } else {
      document.getElementById(id.toString()).style.height = '0px';
      document.getElementById(id.toString()).style.display = 'none';
    }
    
  }

  // Output:
  showNotif(event) {
    this.openNotif.emit(event);
  }

  selectMenu(selected: number, route?: string) {
    console.log(route);
    if (route) {
      this.menuService.selectMenu(selected);
      this.router.navigate([`${route}`]); 
    }
  }

  profile_Click(event) {
    this.profileClick.emit(event)
  }

  logout(event) {
    this.setMenu(false);
    this.logoutEvent.next(event)
  }

  hovered() {
    if (this.hover == true) {
      return this.badgeColor;
    }
    return "";
  }
}
