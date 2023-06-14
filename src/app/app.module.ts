import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMatMenuModule } from './../lib/ngx-mat-menu.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AppRoutingModule } from './app-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { DialogTestComponent } from './dialogs/dialog-test/dialog-test.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AddComponent } from './product/add/add.component'
import { EditComponent } from './components/edit/edit.component';
import { DeleteComponent } from './components/delete/delete.component';
import { ListComponent } from './components/list/list.component';

//authentication
import { AuthModule } from '@auth0/auth0-angular';
import { AuthComponent } from './components/auth/auth.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { MenuComponent } from './components/menu/menu.component';
import { SharedComponent } from './shared/shared.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { UnsplashComponent } from './images/unsplash/unsplash.component';
import { ProductsComponent } from './product/products/products.component';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { DevicesMapComponent } from './devices-map/devices-map.component';
import { BlogComponent } from './blog/blog.component';
import { BlogArticleComponent } from './blog/blog-article/blog-article.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent,
    DialogTestComponent,
    AddComponent,
    EditComponent,
    DeleteComponent,
    ListComponent,
    AuthComponent,
    UserInfoComponent,
    MenuComponent,
    SharedComponent,
    HeaderComponent,
    CarouselComponent,
    UnsplashComponent,
    ProductsComponent,
    DevicesMapComponent,
    BlogComponent,
    BlogArticleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxMatMenuModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    HammerModule,
    AuthModule.forRoot({
      domain: 'dev-87n5xdknhasjfnfy.eu.auth0.com',
      clientId: 'c1pHlI3FisjlFs2eCJ8lAo3lXo4VwnIA',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatDialogModule,
    MatExpansionModule,
    NgbModule,
  ],
  entryComponents: [
    DialogTestComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
