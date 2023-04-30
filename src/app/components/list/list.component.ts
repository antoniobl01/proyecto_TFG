import { Component, OnInit } from '@angular/core';
import { NgxMatMenuService } from '../../../lib/public-api';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private menuService: NgxMatMenuService
    ) {
      menuService.changeMenu(true);
      menuService.selectMenu(5); }

  ngOnInit(): void {
  }

}
