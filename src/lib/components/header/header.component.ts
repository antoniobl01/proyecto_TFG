import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { Theme } from '../../interfaces/menu-models';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'ngx-mat-menu-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {


  @Input() theme: Theme;
  @Input() visibleNotif: boolean;
  @Input() srcLogo: string;
  @Input() heightLogo: string;
  @Input() widthLogo: string;
  @Input() badge: number;
  @Input() borderHeader: string;
  @Output() showMenu = new EventEmitter();
  @Output() showNotif = new EventEmitter();
  constructor(
    public productService: ProductService
    ) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.heightLogo = this.heightLogo ? this.heightLogo : 'auto';
    this.widthLogo = this.widthLogo ? this.widthLogo : 'auto';

    // this.badge = this.productService.buyedProducts.length;
  }

  btnShowMenu_Click() {
    this.showMenu.emit();
  }

  btnShowNotif_Click() {
    this.showNotif.emit();
  }

}
