import { Component, OnInit } from '@angular/core';
import { NgxMatMenuService } from '../../../lib/public-api';
import { MatDialog } from '@angular/material/dialog';
import { DialogTestComponent } from 'src/app/dialogs/dialog-test/dialog-test.component';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showMenu: boolean = true;
  
  constructor(
    public dialog: MatDialog,
    private menuService: NgxMatMenuService,
    public auth: AuthService
  ) {
    menuService.changeMenu(true);
    menuService.selectMenu(0);
    
   }

  ngOnInit() {
  }

  changeMenu() {
    this.showMenu = !this.showMenu;
    this.menuService.changeMenu(this.showMenu);
  }

}
