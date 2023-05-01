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
import { AddComponent } from './components/add/add.component'
import { EditComponent } from './components/edit/edit.component';
import { DeleteComponent } from './components/delete/delete.component';
import { ListComponent } from './components/list/list.component';

//authentication
import { AuthModule } from '@auth0/auth0-angular';
import { AuthComponent } from './components/auth/auth.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { MenuComponent } from './components/menu/menu.component';

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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxMatMenuModule,
    AppRoutingModule,
    CommonModule,
    FlexLayoutModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    HammerModule,
    AuthModule.forRoot({
      domain: 'dev-87n5xdknhasjfnfy.eu.auth0.com',
      clientId: 'c1pHlI3FisjlFs2eCJ8lAo3lXo4VwnIA',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  ],
  entryComponents: [
    DialogTestComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
